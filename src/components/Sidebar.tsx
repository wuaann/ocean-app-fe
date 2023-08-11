import {NavLink, Outlet} from "react-router-dom";
import {
    faArrowRightFromBracket,
    faBars,
    faClapperboard, faGear,
    faHouse,
    faMagnifyingGlass, faRepeat
} from "@fortawesome/free-solid-svg-icons";
import {faCompass, faHeart} from '@fortawesome/free-regular-svg-icons';
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import {useAppDispatch} from "../app/hooks";
import {authActions} from "../features/auth/authSlice";

function Sidebar() {

    const [showButton, setShowButton] = useState(false)

    const dispatch = useAppDispatch()

    const handleLogout =() =>{
        dispatch(authActions.logout())
    }

    const handleShow = () => {
        setShowButton(!showButton)
    }

    return (
        <>
            <aside id="default-sidebar "
                   className="fixed bg-black top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div
                    className="h-full px-3 py-4 overflow-y-auto dark:bg-black border-r-gray-700 border-r  flex flex-col justify-between">
                    <div>
                        <h1 className="font-lobster mt-3 mb-6 cursor-pointer text-transparent text-5xl bg-clip-text bg-gradient-to-r text-white "><NavLink to={"/"} className={"ml-3"}>Oceania</NavLink></h1>

                        <ul className="space-y-2   text-white font-normal text-base">
                            <li>
                                <NavLink  to={"/"}
                                    className="flex items-center p-3 m-1  cursor-pointer text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10  dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faHouse}/>
                                    <p className={"ml-3"}>Home</p>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to={"/"}
                                    className="flex  items-center p-3 m-1  cursor-pointer  text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faMagnifyingGlass}/>
                                    <span className="flex-1   ml-3 whitespace-nowrap">Search</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/profile"}
                                    className="flex items-center   text-white p-3 m-1 cursor-pointer  rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faCompass} spin spinReverse/>
                                    <p className="flex-1 ml-3 whitespace-nowrap">Explore</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/profile"}
                                    className="flex items-center  text-white  p-3 m-1  cursor-pointer rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faClapperboard}/>
                                    <p className="flex-1 ml-3 whitespace-nowrap">Reels</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/profile"}
                                    className="flex items-center p-3 m-1  cursor-pointer  text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faHeart}/>
                                    <p className="flex-1 ml-3 whitespace-nowrap">Notifications</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/profile"}
                                    className="flex items-center p-3 m-1  cursor-pointer  text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faFacebookMessenger}/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                                    <span
                                        className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-[#FE0000] rounded-full dark:bg-red ">3</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/profile"}
                                    className="flex items-center p-3 m-1  cursor-pointer  text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                                    <div className={"w-6"}>
                                        <img className={"rounded-full"}
                                             src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                                             alt=""/>
                                    </div>
                                    <p  className={"flex-1 ml-3 whitespace-nowrap"}>Profile</p>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className={"text-white"}>

                        {
                            showButton &&

                            <aside id="default-sidebar "
                                   className="absolute bottom-[10%] rounded-2xl bg-[#262626] w-64 h-40 transition-transform -translate-x-full sm:translate-x-0"
                            >
                                <div
                                    className="h-full px-2 py-2 overflow-y-auto dark:bg-black  ">
                                    <ul className="space-y-2  text-white font-normal text-base">
                                        <li>
                                            <div
                                                className="flex items-center p-2 m-1  cursor-pointer text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10  dark:hover:bg-gray-700 group">
                                                <FontAwesomeIcon icon={faGear}/>
                                                <span className="ml-3">Settings</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="flex items-center p-2 m-1  cursor-pointer text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10  dark:hover:bg-gray-700 group">
                                                <FontAwesomeIcon icon={faRepeat}/>
                                                <span className="ml-3">Switch accounts</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                onClick={() => handleLogout()}
                                                className="flex items-center p-2 m-1  cursor-pointer text-white rounded-lg dark:text-white hover:bg-gray-100 hover:bg-opacity-10  dark:hover:bg-gray-700 group">
                                                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                                                <span className="ml-3">Log out</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        }
                        <div
                            onClick={() => handleShow()}
                            className="flex items-center p-3 m-1  cursor-pointer  text-white rounded-lg dark:text-white hover:bg-gray-100  hover:bg-opacity-10 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faBars}/>
                            <span className="flex-1 ml-3 whitespace-nowrap">More</span>
                        </div>


                    </div>
                </div>
            </aside>

            <div className="p-0 bg-black sm:ml-64">
                <Outlet/>
            </div>

        </>
    )

}

export default Sidebar