import {Outlet} from "react-router-dom";
import {faBars, faClapperboard, faHouse, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {faCompass, faHeart} from '@fortawesome/free-regular-svg-icons';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
    return (
        <>
            <aside id="default-sidebar"
                   className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div
                    className="h-full px-3 py-4 overflow-y-auto dark:bg-black border-r-gray-700 border-r  flex flex-col justify-between">
                    <div>
                        <h1 className="font-lobster mt-3 mb-6 cursor-pointer text-transparent text-5xl bg-clip-text bg-gradient-to-r text-white ">Oceania</h1>

                        <ul className="space-y-2 font-normal text-base">
                            <li>
                                <div
                                    className="flex items-center p-3 m-1  text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faHouse}/>
                                    <span className="ml-3">Home</span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faMagnifyingGlass}/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faCompass} spin spinReverse/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Explore</span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faClapperboard}/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Reels</span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faHeart}/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon size={"xl"} icon={faFacebookMessenger}/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                                    <span
                                        className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-[#FE0000] rounded-full dark:bg-red ">3</span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <div className={"w-6"}>
                                        <img className={"rounded-full"}
                                             src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                                             alt=""/>
                                    </div>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className={"text-white"}>
                        <div
                            className="flex items-center p-3 m-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
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