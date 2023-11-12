import React,{useState} from 'react'
import { authservice} from '../appwrite/auth'
import { login as authlogin } from '../store/authSlice'
import {set, useForm} from 'react-hook-form'
import {Input,Button,Logo} from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Login() {
    const navigate=useNavigate;
    const dispatch=useDispatch;
    const [error, setError] = useState("")
    const {register,handleSubmit}=useForm();
    const login=async(data)=>{
        setError("");
        try {
            const session=await authservice.login(data);
            if (session){
            const userData=await authservice.getCurrentUser();
            if (userData){
                dispatch(authlogin(userData));
                navigate('/');
            }
            }
        } catch (error) {
            setError(error);
        }

    }
  return (
    <>
     <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}></div>
     <div className='mb-2 flex justify-center '>
        <span className='inline-block w-full max-w-[100px]'>
           <Logo width='100%'/>
        </span>
     </div>
     <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
     <p className='mt-2 text-center text-base text-black/60'>
        Don&apos;t have any account?&nbsp;
        <Link to="/signup"
        className='font-medium text-primary transition-all duration-200 hover-underline'>
            Sign Up
        </Link>
     </p>
     {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
     <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input type='email' label="Email:" placeholder="Enter your email" {...register("email",{
                required:true,
                validate:{
                  matchPattern:(value)=>{
                  /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value)||"email address must be valid"
                  }
            }})}/>
            <Input type="password" label="Password:" placeholder="Enter password" {...register("password"),{
              required:true
            }}/>
            <Button type="submit" className='w-full'>Sign in </Button>   
            {/* possible to call like this??Component lai esari call garera */}
          </div>
     </form>
     </div>
    </>
  )
}

export default Login