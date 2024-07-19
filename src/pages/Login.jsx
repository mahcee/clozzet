import { FcGoogle } from "react-icons/fc";
import { FaEye, FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
function Login(){
    const[showPassword,setShowPassword]=useState(false)
    function handleShowPassword(){
        setShowPassword(prev=>!prev)
    }
    return(
        
            
        <div className="container mx-auto flex flex-1 gap-7"> 

        <div>
        <img src="src/assets/images/login.png" className="h-[100vh]" />

        </div>
        <div className="flex flex-col gap-10">
            <h2 className="font-bold text-6xl mt-8">Login to  Your Account</h2>
            <input type="text" placeholder="Email Address" className="border border-gray-400 text-black rounded-full px-[4em] py-8"/>
              <div  className="border  border-gray-400 rounded-full  justify-between items-center flex pr-4 "> 
                <input type={showPassword?"password":"text"} placeholder="Password" className="px-[4em] py-8 flex-1 outline-none bg-transparent "/>
               <div onClick={handleShowPassword}>
                {showPassword?<FaEyeSlash/>:<FaEye/>}
            
             
               </div>
                </div>
               <div className="flex items-center gap-10">
                <input type="checkbox"/>
                <p>Remember Me</p>
              
                <div>

                <p className="hover:bg-[#45c9a1]">Forgot Pasword?</p>
                </div>
            </div>
               <button className="border  border-gray-400 bg-[#45c9a1] rounded-full text-white px-[4em] py-6 font-bold text-2xl">Sign in</button>

           
           
            <div className="flex gap-3  items-center">
                <div className="border-b-2 border-gray-700 w-[300px]" ></div>
                <div>OR</div>
                <div className="border-b-2 border-gray-700 w-[300px]"></div>
            </div>
            <div className="flex gap-10 justify-center  items-center  text-blue-600 flex-col sm:flex-row border border-gray-500 shadow-[0_0_5px_lightgray] mt-10 mb-10 bg-white rounded-full px-[4em] py-4">
      <FcGoogle className="size-7" />
      <input
        type="text"
        placeholder="Sign Up With Google"
        className="text-3xl text-blue-600"
      />
      

    </div>
            
      <p className="flex justify-center">
        Already Have An Account?{" "}
        <a href="/login" className="text-[#45C9A1]">
          Sign Up free
        </a>
      </p>
        </div>
        </div>
   
    )
}
export default Login;