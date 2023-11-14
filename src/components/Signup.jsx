import React,{useState} from 'react'
import authservice from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import {Button,Input} from '../components/index'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import {Logo} from './index'

function Signup() {
  const [error, setError] = useState("")
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {register,handleSubmit}=useForm();
  const signup=async(data)=>{
   console.log(data);
   // try {
   //    const userData=await authservice.createAccount(data);
   //    if (userData){
   //    const userData= await authservice.getCurrentUser();
   //     useDispatch(login(userData));
   //     navigate("/");
   //    }  
   //  } catch (error) {
   //    setError(error);
   //  }
    
  }
  return (
     <>
       <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}></div>
       </div>
       <div className='mb-2 flex justify-center '>
        <span className='inline-block w-full max-w-[100px]'>
           <Logo width='100%'/>
        </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to your account</h2>
     <p className='mt-2 text-center text-base text-black/60'>
        Already have an account&nbsp;
        <Link to="/login"
        className='font-medium text-primary transition-all duration-200 hover-underline'>
             Log-in 
        </Link>
     </p>
     {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(signup)}>
           <Input
           type="text"
           label="Name:"
           placeholder="Enter your name" {...register("name",{
            required:true
           })}
           ></Input>
           <Input
           type="email"
           label="Email:"
           placeholder="Enter your email"
           ></Input>
           <Input
           type="password"
           label="Password:"
           placeholder="Enter your password"
           ></Input>
           <Button type='submit'>Create Account</Button>

        </form>
     </>
   
    )
}

export default Signup