import { comparepassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import JWT from 'jsonwebtoken';

export const registercontroller=async(req,res)=>{

    try{
       const {name,email,password,phone,address,answer}=req.body 
       //validation
       if(!name){
        return res.send({massage:'name is required'})
       }

         if(!email){
        return res.send({massage:'email is required'})
       }

         if(!password){
        return res.send({massage:'password is required'})
       }

         if(!phone){
        return res.send({massage:'phone number is required'})
       }

         if(!address){
        return res.send({massage:'address is required'})
       }

         if(!answer){
        return res.send({massage:'answer  is required'})
       }
    //existin user

    const existinguser=await userModel.findOne({email})

    if(existinguser){
        return  res.status(200).send({
            success:false,
            massage:'Already register please login'
        })
    }

    //register user
    const hashedPassword=await hashPassword(password)
    //save

    const user= await new userModel({name,
        email,
        phone,
        address,
        password:hashedPassword,
        answer
    }).save()

        
    res.status(201).send({
        success:true,
        massage:'user register sussefully',
        user
    })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            massage:'Error in registeration',
            error
        })
    }
 };


 //post login

 export const loginController=async(req, res)=>{
    try{
        const {email,password}=req.body
        //validation
        if(!email  || ! password){
            return res.status(404).send({
                success:false,
                massage:'envilad email and password'
            })
        }
        //check user
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                massage:'Email is not register'
            })
        }

      const match =await comparepassword(password,user.password)
        if(!match){
            return res.status(202).send({
                success:false,
                massage:'invalid password'
            })
        }

        //token
const token=await JWT.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:"7d",})
     
            res.status(200).send({
                success:true,
                massage:'login succefully',

                user: {
                    name :user.name,
                    email:user.email,
                    phone: user.phone,
                    address:user.address,
                    role:user.role,
                },
                token,
            });
   

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            massage:'error in login',
            error
        })
    }
 };

//  forgot password
export const forgotPasswordController=async(req, res)=>{

    try{
        const {email, answer,  newPassword}=req.body
        if(!email){
            res.status(400).send({massage:'Email is required'})
        }

         if(!answer){
            res.status(400).send({massage: 'answer  is required'})
        }

         if(! newPassword){
            res.status(400).send({massage:'newPassword is required'})
        }
        //  check 
        const user=await userModel.findOne({email,answer})
        // validation
        if( !user){
            return res.status(404).send({
                success: false,
                massage:'wrong email and answer'
            })
        }

        const hashed=await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            massage:'password Reast sussefully',
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            massage:'something went wrong',
            error
        })
    }
};

 // test controller
 export const testController=(req, res)=>{
    try{
        res.send("protect routes");
    }catch(error){
        console.log(error);
        res.send({error});
    }
 };

 //update prfole
  export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user.id);

    //password
   if (password && password.length < 6) {
     

       return res.status(400).send({
    success: false,
    message:"Passsword is required and 6 character long"
    });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
   const updatedUser = await userModel.findByIdAndUpdate(req.user.id, 

      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

//orders
export const getOrderController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user.id })   // make sure _id use nahi karna
      .populate("products", "-photo")
      .populate("buyer", "name")
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting orders",
      error
    });
  }
};


// All orders
export const getAllOrderController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "name price description")
      .populate("buyer", "name")
      .sort({ createdAt: -1 });  // FIXED

    res.status(200).send({
      success: true,
      message: "Orders fetched successfully",
      orders,
    });

  } catch (error) {
    console.log("ORDER FETCH ERROR:", error);
    res.status(500).send({
      success: false,
      message: "Error while getting orders",
      error,
    });
  }
};


// order status 
 export const orderStatusController=async(req,res)=>{
   try{
      const {orderId} =req.params
      const { status}=req.body
      const orders= await orderModel.findByIdAndUpdate
      (orderId,{status},{new:true});
      res.json(orders);
   }catch(error){
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error while updating Order',
      error
    })
   }

 }