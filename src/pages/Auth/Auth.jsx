import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import eye from "../../img/show-eye.png";
import hideEye from "../../img/hide-eye.png"


// for dark mode
import { useEffect, useState } from 'react'; //also useState is required, but thats already imported above
// for dark mode

const Auth = () => {
    // For Toggle Login And SignUp
    const [login, setLogin] = useState("Login");


  return (
    <div className="Auth flex items-center justify-center h-screen gap-16 relative ">
        <div className="a-left flex flex-col md:flex-row  gap-4 items-center justify-center">
            <img src={Logo} alt="" className='h-24 w-24'/>
            <div className="Webname flex flex-col font-bold">
                <h1 className='font-bold text-3xl  bg-[100%] bg-repeat bg-gradient-to-r from-[#2eaafa]-to-[#1060d7] leading-normal'>FeatherPerfect</h1>
                <h6 className='dark:text-white pt-0 mb-1'>IPF is our Brand Ambassador!</h6>
                <h6 className='text-xs font-extralight dark:text-white/80'>(You guessed it right! It has Perfect Feathers!)</h6>
            </div>

       {login === "Login" ? <LogIn setLogin={setLogin}/>
        : <SignUp setLogin={setLogin}/>}
        </div>
    </div>
  )
}

function SignUp({setLogin}){
        // for dark mode
  const [theme, setTheme] = useState(null);

  const [isSignIn, setIsSignedIn] = useState(false);

  const signupHandler =()=>{
    //   dummy signup handler 
    // complete signin handler here 
   
    if(isSignIn){
        toast.success("Sign In Successfully")
        // toasts can be added further according to use cases
    }else{
        toast.error("Sign In Failed")
    }
     
 }

  const [passHidden, setPassHidden] = useState(true);
  const [confPassHidden, setConfPassHidden] = useState(true);


  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    } else {
      setTheme('light');
    }

  }, [])

  useEffect(() =>{
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark"? "light" : "dark");
  };

  // for dark mode
    return (
        <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 gap-4 shadow-lg">
            <div className="infoForm flex flex-col gap-4 items-center">

                <div className='flex gap-4 justify-end'>
                    <h3 className='font-bold text-lg dark:text-white'>SignUp</h3>
                    

                    {/* Dark mode Toggle Button */}
                    <div  className=''>
                        <button type='button' className='text-black hover:border-4 font-bold dark:text-blue-700 rounded-sm border-2  p-1' onClick={handleThemeSwitch}>Dark</button>
                    </div>
                    {/* Dark mode Toggle Button */}

                </div>

                <div className='flex gap-2 '>
                    <input type="text" placeholder='First Name' name='firstname' className='infoInput bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none'/>
                    <input type="text" placeholder='Last Name' name='lastname' className='infoInput bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none'/>
                </div>

                <div className='w-full '>
                    <input type="text" placeholder='UserName' name='username' className='userName w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none' />
                </div>

                <div className='flex gap-2'>
                    <div className='relative'>
                        <input type={passHidden ? "password" : "text"} placeholder='Password' name='Password' className='password bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none'/>
                        <button className='text-white absolute right-1 h-full'>
                            <img src={passHidden ? hideEye : eye } onClick={() => setPassHidden(!passHidden)} className='w-full h-full p-2 text-white' alt="" />
                        </button>
                    </div>
                    <div className="relative">
                        <input type={confPassHidden ? "password" : "text"} placeholder='Confirm Password' name='Confirm Password' className='confirmPassword bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none'/>
                        <button className='text-white absolute right-1 h-full'>
                            <img src={confPassHidden ? hideEye : eye } onClick={() => setConfPassHidden(!confPassHidden)} className='w-full h-full p-2 text-white' alt="" />
                        </button>
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center gap-4'>

                <div className='flex text-sm items-center gap-2'>
                    <span className='dark:text-white'>Already have an account?</span>
                    <span className='font-bold hover:underline hover:cursor-pointer dark:text-white' onClick={() => setLogin("Login")}>Login</span>
                </div>

                <button type='submit' onClick={signupHandler} className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer'>
                    SignUp
                </button>
            </div>

        </div>
    )
}

function LogIn({setLogin}){



 const [isLoggedIn , setIsLoggedIn]= useState(true);
  
 const loginHandler =()=>{
    //  dummy login handler 
    // complete the login  handler here 
   
   
    if(isLoggedIn){
        toast.success("Logged In Successfully")
    }else{
        toast.error("Login Failed")
    }
     
 }

    const [hidden, setHidden] = useState(true);
  
    return (

        <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 w-96 gap-4 shadow-lg">
            <div className="infoForm flex flex-col gap-4 items-center">

                <h3 className='font-bold text-lg dark:text-white'>Login</h3>

                <div className='w-full '>
                    <input type="text" placeholder='UserName' name='username' className='userName w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none' />
                </div>

                <div className='w-full relative'>
                    <input type={hidden ? "password" : "text"} placeholder='Password' name='password' className='Password w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none' />
                    <button className='text-white absolute right-1 h-full'>
                        <img src={hidden ? hideEye : eye } onClick={() => setHidden(!hidden)} className='w-full h-full p-2 text-white' alt="" />
                    </button>
                </div>

                <div className='flex flex-col items-center gap-4'>

                    <div className='flex text-sm items-center gap-2'>
                        <span className="dark:text-white">New to Wildlife?</span>
                        <span className='font-bold hover:underline hover:cursor-pointer dark:text-white' onClick={() => setLogin("SignUp")}>SignUp</span>
                    </div>

                    <Link to="/home">
                        <button type='submit' onClick={loginHandler} className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer'>
                            Login
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Auth

// bg-gradient-to-r from-[#f9a225] to-[#f95f35]
// linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)
