import React ,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import  toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';



const Register=()=>{
    const [name, setName]=useState("");
     const [email, setEmail]=useState("");

     const [password, setPassword]=useState("");
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("");
    const [answer, setanswer]=useState("");


    const navigate=useNavigate();

    // from function
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
          const res=await axios.post('/api/v1/auth/register',
            {name,email,password,phone,address,answer});
            if(res.data.success){
              toast.success(res.data.massage);
              navigate("/login");
            }else{
              toast.error(res.data.massage);
            }

        }catch(error){
          console.log(error);
          toast.error('something went wrong');
        }
    };

    return (
        <Layout>
        <div className="form-container">
            <h1>Register page</h1>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
   

    <input 
      type="text" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="form-control" 
      id="exampleInputEmail1" 
      placeholder="Enter your name"
      required
    />
    
  </div>

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
      type="password" 
            onChange={(e)=>setPassword(e.target.value)}

      value={password}
      className="form-control" 
      id="exampleInputPassword1" 
      placeholder="Enetr your Password"
            required

    />
  </div>


    <div className="mb-3">
    <input 
      type="text" 
      value={phone}
            onChange={(e)=>setPhone(e.target.value)}

      className="form-control" 
      id="exampleInputEmail1" 
      placeholder="Enter your phone"
            required

    />
    
  </div>

    <div className="mb-3">
    <input 
      type="text" 
      value={address}
            onChange={(e)=>setAddress(e.target.value)}

      className="form-control" 
      id="exampleInputEmail1" 
      placeholder="Enter your Address"
     required

    />
    
  </div>

        <div className="mb-3">
    <input 
      type="text" 
      value={answer}
            onChange={(e)=>setanswer(e.target.value)}

      className="form-control" 
      id="exampleInputEmail1" 
      placeholder="what is your pet name"
     required

    />
    
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
        </Layout>
    )
}
export default Register;