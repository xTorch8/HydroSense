import React from "react";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#002B58] p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Register</h2>
                <form id="style-7" className="max-h-[400px] overflow-y-auto"> 
                    <div className="mb-2">
                        <label htmlFor="FName" className="block text-lg text-white text-base">First Name</label>
                        <input
                            type="text"
                            id="FName"
                            placeholder="Enter your First Name"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-2 mt-2">
                        <label htmlFor="LName" className="block text-lg text-white text-base">Last Name</label>
                        <input
                            type="text"
                            id="LName"
                            placeholder="Enter your Last Name"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    
                    <div className="mb-2 mt-2">
                        <label htmlFor="email" className="block text-lg text-white text-base">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-2 mt-2">
                        <label htmlFor="password" className="block text-lg text-white text-base">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-2 mt-2">
                        <label htmlFor="confirmPass" className="block text-lg text-white text-base"> Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPass"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 py-2 bg-white text-white text-[#002B58] font-semibold rounded-lg hover:bg-[#B6CDFF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        REGISTER
                    </button>
                    <span className="text-sm text-[#BFCAD5]">Already have an account? <a href="#" className="text-indigo-600 hover:text-[#92DFF3]"> Login</a></span>
                </form>
            </div>

            <style>
                {`
                    #style-7::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                        background-color: #F5F5F5;
                        border-radius: 10px;
                    }

                    #style-7::-webkit-scrollbar {
                        width: 10px;
                        background-color: #F5F5F5;
                    }

                    #style-7::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        background-image: -webkit-gradient(linear,
                                                            left bottom,
                                                            left top,
                                                            color-stop(0.44, rgb(122, 153, 217)),
                                                            color-stop(0.72, rgb(73, 125, 189)),
                                                            color-stop(0.86, rgb(28, 58, 148)));
                    }
                `}
            </style>
        </div>
    );
}

export default RegisterPage;