import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController=async(req,res)=>{

    try{
        const{name}=req.body
        if(!name){
         
            return res.status(401).send({message : 'Name is required'})
        }
        const existingCategory=await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success :true,
                message:'Category Already exisits'
            })
        }
        const category=await new categoryModel({name,slug:slugify(name)}).save();
        res.status(201).send({
            success:true,
            message:'new category created ',
            category
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error in category'
        })
    }
};

//update catetegory
export const updateCategoryController=async(req,res)=>{
try{
 const {name}=req.body
 const{id}=req.body
    const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
res.status(200).send({
    success:true,
    message:"category updated succesfully",
    category,
})

}catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        error,
        message:'Error while updating category'
    })
}
};

//get all category
export const categoryController=async(req,res)=>{
    try{
        const category=await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:'All categories List',
            category,
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message :'Error while geting all categories'
        })
    }
};

//single category controller

export const singleCategoryController=async(req,res)=>{
    try{
       
        const category=await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'Get Single category Successfullly',
            category
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'error while getting single category'
        })

    }
};



//delete category cantroller

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await categoryModel.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
      deletedCategory,
    });
  } catch (error) {
    console.log("Delete error:", error);
    res.status(500).send({
      success: false,
      message: "Error while deleting category",
      error,
    });
  }
};
