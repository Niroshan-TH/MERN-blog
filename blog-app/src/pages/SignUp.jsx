import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
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
          <form className='flex flex-col gap-4'>
            <div >
                <Label value='your username'>your username </Label>
                <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div >
                <Label value='your email'>your email </Label>
                <TextInput type='text' placeholder='Email' id='email'/>
            </div>
            <div >
                <Label value='password'>your password </Label>
                <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button className='px-2 py-1 !bg-gradient-to-r !from-indigo-500 !via-purple-500 !to-pink-500 rounded-lg' type='submit'>Sign up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Have an account 
              <Link to='/sign-in' className='text-blue-500'> Sign-in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
