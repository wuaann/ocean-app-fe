import React from "react";

function Login() {
    return (
        <>

            <div className={"w-[80%] m-auto "}>

                <div className={"flex items-center  "}>

                    <div className="flex flex-wrap items-center justify-center mt-20">
                        <figure className="transform translate-x-10 origin-bottom -rotate-12 ">
                            <div className={"w-80 "}>
                                <img className={"w-full"} src="https://i.pinimg.com/736x/cf/f4/2f/cff42f815b29f0d42d38e00e7f07ddba.jpg"
                                     alt=""/>
                            </div>
                        </figure>
                        <figure className="transform z-10 ">
                            <div className={"w-80"}>
                                <img className={"w-full"} src="https://i.pinimg.com/564x/55/25/f8/5525f802b6fd21f8ec5ef0a8680a6230.jpg"
                                     alt=""/>
                            </div>
                        </figure>
                        <figure className="transform -translate-x-10 origin-top rotate-12 ">
                            <div className={"w-80 "}>
                                <img className={"w-full"} src="https://i.pinimg.com/564x/5e/96/04/5e9604115d6a0f0f71a0bbac5ff40615.jpg"
                                     alt=""/>
                            </div>
                        </figure>
                    </div>
                    <div>
                        <div className="flex h-screen items-center justify-center">
                            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                                <h1 className="font-lobster mt-3 mb-6 cursor-pointer text-transparent text-5xl bg-clip-text bg-gradient-to-r from-customPink from-10% via-customBlue via-20% to-red-900 to-70% hover:from-red-700 hover:via-customPurple hover:to-sky-600">Oceania</h1>

                                <h2 className="text-2xl font-bold mb-6">Login</h2>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="username"
                                               className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                        <input type="text" id="username" name="username"
                                               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                               placeholder="Enter your username" required/>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="password"
                                               className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                        <input type="password" id="password" name="password"
                                               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                                               placeholder="Enter your password" required/>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button type="submit"
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">Login
                                        </button>
                                        <div className="text-blue-500 hover:text-blue-600 text-sm font-bold">Forgot
                                            Password?
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login