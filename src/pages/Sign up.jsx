import { FcGoogle } from "react-icons/fc";
function SignUp(){
    return(
        <div className="container mx-auto flex flex-1 gap-7"> 

            <div className="flex flex-col gap-10">
                <h2 className="font-bold text-6xl mt-8">Create Your Account</h2>
                <div className="flex gap-3">
                <input type="text" placeholder="First Name" className="border border-gray-400 text-black rounded-full px-[2em] py-6"/>
                <input type="text" placeholder="Last Name" className="border border-gray-400 text-black rounded-full px-[2em] py-6"/>

                </div>
                <input type="text" placeholder="Email Address" className="border border-gray-400 text-black rounded-full px-[4em] py-6"/>
                <input type="text" placeholder="Password" className="border  border-gray-400 rounded-full px-[4em] py-6"/>
                <button className="border  border-gray-400 bg-[#45c9a1] rounded-full text-white px-[4em] py-6 font-bold text-2xl">Create Account</button>
               
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
              Log in
            </a>
          </p>
            </div>
            <div>
            <img src="src/assets/images/login.png" className="h-[100vh]" />

            </div>
            </div>
       
    )
}
export default SignUp;