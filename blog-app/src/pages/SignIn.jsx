import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { use, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { signInStart ,signInSuccess ,signinFailure } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Signin() {
  const[formData,setFormData]=useState({})
  const{loading, error:errorMessage}=useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signinFailure('please fill all feilds'))
    }
    try{
      dispatch(signInStart())
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData),
      });
      const data= await res.json()
      if (data.success==false){
        dispatch(signinFailure(data.message))
      }
      
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    }catch(error){
      
    }
  }
  return (
    <div className='min-h-screen mt-20 ml-5'>
      <div className='flex p-3 max-w-3xl max-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left*/}
        <div className='flex-1 '>
        <Link to="/" className=" font-bold  dark:text-white text-4xl">
        <span className="px-2 py-1 !bg-gradient-to-r !from-indigo-500 !via-purple-500 !to-pink-500 rounded-lg">
          Niroshan's
        </span>
        blog
      </Link>
      <p className='flex text-sm mt-5 flex-col md:flex-row md:items-center'>
      This is a demo project. You can sign in with your email and password or with Google.
      </p>
        </div>
        {/*right*/}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div >
                <Label value='your email'>your email </Label>
                <TextInput type='text' placeholder='Email' id='email'onChange={handleChange}/>
            </div>
            <div >
                <Label value='password'>your password </Label>
                <TextInput type='text' placeholder='Password' id='password'onChange={handleChange}/>
            </div>
            <Button className='px-2 py-1 !bg-gradient-to-r !from-indigo-500 !via-purple-500 !to-pink-500 rounded-lg' type='submit' disabled={loading}>
              {loading ? (
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
              ) : 'Sign in'}
              </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Dont Have an account 
              <Link to='/sign-up' className='text-blue-500'> Sign-up</Link>
            </span>
          </div>
          {errorMessage&&(
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

