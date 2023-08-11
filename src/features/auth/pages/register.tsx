import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {authActions, selectIsRegister, selectRegisterSuccess} from "../authSlice";
import {BeatLoader} from "react-spinners";

function Register() {
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [firstName, setFirstName] = useState("")

    const [lastName, setLastName] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")

    const [passwordMatch, setPasswordMatch] = useState(false);

    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(selectIsRegister)

    const RegisterSuccess = useAppSelector(selectRegisterSuccess)

    const navigate = useNavigate();


    useEffect(() => {

        if (password === confirmPassword) {
            setPasswordMatch(true)
        } else {
            setPasswordMatch(false)
        }
    }, [confirmPassword, password])

    const handleSignup = () => {

        dispatch(authActions.register({
            email: email,
            salted_password: password,
            first_name: firstName,
            last_name: lastName
        }));

        if (RegisterSuccess){
            navigate("/login");
        }

    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <h1 className="font-lobster flex items-center  mt-3 mb-6 cursor-pointer text-transparent text-8xl bg-clip-text bg-gradient-to-r from-customPink from-10% via-customBlue via-20% to-red-900 to-70% hover:from-red-700 hover:via-customPurple hover:to-sky-600">Oceania</h1>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <div className="space-y-4 md:space-y-6">

                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@hehe.com"/>
                            </div>

                            <div className={"flex  justify-between"}>
                                <div>
                                    <label htmlFor="last-name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                        name</label>
                                    <input
                                        onChange={(event) => setLastName(event.target.value)}
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Last Name"/>
                                </div>
                                <div>
                                    <label htmlFor="first-name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                        name</label>
                                    <input
                                        onChange={(event) => setFirstName(event.target.value)}
                                        type="first-name"
                                        name="first-name"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="First name"/>
                                </div>

                            </div>

                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password" name="password" id="password" placeholder="Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div>
                                <label htmlFor="confirm-password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <input
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    type="password" name="confirm-password" id="confirm-password"
                                    placeholder="Confirm Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I
                                        accept the <NavLink
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            to="#">Terms and Conditions</NavLink></label>
                                </div>
                            </div>

                            {
                                passwordMatch
                                    ?
                                    <button
                                        onClick={() => handleSignup()}
                                        className=" bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                                        {isLoading
                                            ?
                                            <BeatLoader color="#fafafa"/>
                                            :
                                            <>Sign up</>}
                                    </button>
                                    :
                                    <button
                                        onClick={() => handleSignup()}
                                        disabled={true}
                                        className="cursor-not-allowed  bg-blue-200 w-full  text-white font-bold py-2 px-4 border border-blue-700 rounded focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                                        Sign up
                                    </button>
                            }

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <NavLink to={"/login"}
                                                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                here</NavLink>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;