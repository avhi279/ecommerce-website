import React ,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import  toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';


const ForgotPassword =()=>{
      const [email, setEmail]=useState("")
    
         const [newPassword, setnewPassword]=useState("")
     const [answer, setanswer]=useState("")



        const navigate=useNavigate();
         const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
      const res=await axios.post('/api/v1/auth/forgot-password',
            {email,newPassword, answer});
            if(res.data.success){
              toast.success(res.data.massage);
           

      navigate( "/login");  
            }else{
              toast.error(res.data.massage);
            }

        }catch(error){
          console.log(error);
          toast.error('something went wrong')
        }
    };

    return(
 <Layout>
  <div className="form-container">
            <h1>Reset password</h1>
            <form onSubmit={handleSubmit}>


          <div className="mb-3">
    <input 
      type="email" 
            onChange={(e)=>setEmail(e.target.value)}

      value={email}
      className="form-control" 
      id="exampleInputEmail1" 
      placeholder="Enter your email"
            required
    />
    
  </div>

        <div className="mb-3">
    <input 
      type="text" 
            onChange={(e)=>setanswer(e.target.value)}

      value={answer}
      className="form-control" 
      id="exampleInputEmail1" 
      placeholder="Enter your pet name "
            required
    />
    
  </div>




  <div className="mb-3">
    <input 
      type="password" 
            onChange={(e)=>setnewPassword(e.target.value)}

      value={newPassword}
      className="form-control" 
      id="exampleInputPassword1" 
      placeholder="Enetr your newPassword"
            required

    />
  </div>


     
 

  
    <button type="submit" className="btn btn-primary">LOGIN</button>


</form>

        </div> </Layout>
    )
}

export default ForgotPassword ;