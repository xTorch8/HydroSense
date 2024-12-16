import { useContext, useEffect, useState } from "react";
import loginPic from '../../assets/login_pic.jpg';


const LoginPage = () => {
    return(
        <div className="flex items-center justify-center min-h-screen ">
            <div
                className="relative flex flex-col m-6 space-y-8 bg-[#002B58] shadow-2xl rounded-2xl md:flex-row md:space-y-0"
            >
                <div className="flex flex-col justify-center p-8 md:p-14">
                <span className="mb-6 text-4xl font-bold text-white text-center">LOGIN</span>
                <div className="py-1">
                    <span className="mb-5 text-md text-white">Email</span>
                    <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="email"
                    id="email"
                    />
                </div>
                <div className="py-1">
                    <span className="mb-5 text-md text-white">Password</span>
                    <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    />
                </div>
                <div className="flex justify-between w-full py-1">
                    <span className="text-sm text-[#BFCAD5] hover:text-[#92DFF3]">Forgot password</span>
                </div>
                <button
                    className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                >Login
                </button>
                <div className="text-sm text-[#BFCAD5]">
                    Don't have an account?
                    <span className="text-White font-bold hover:text-[#92DFF3]"> Create One</span>
                </div>
                </div>
                <div className="relative">
                <img
                    src={loginPic}
                    alt="img"
                    className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                />
                
                </div>
            </div>
        </div>
    
    
    )
}

export default LoginPage;