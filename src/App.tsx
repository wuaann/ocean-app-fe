import React from 'react';

import './App.css';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import Login from "./features/auth/pages/login";
import Sidebar from "./components/Sidebar";
import HomePage from "./features/post";
import {useAppSelector} from "./app/hooks";
import {selectToken} from "./features/auth/authSlice";
import Register from "./features/auth/pages/register";
import Profile from "./features/profile";

function App() {
    const token = useAppSelector(selectToken);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {
                    token

                        ?

                            <>
                                <Route path={"/"} element={<Sidebar/>}>
                                    <Route path={""} element={<HomePage/>}/>
                                    <Route path={"profile"} element={<Profile/>}/>
                                    <Route path={"*"} element={<HomePage/>}/>
                                </Route>
                            </>

                        :

                            <>
                                <Route path={"login"} element={<Login/>}/>
                                <Route path={"register"} element={<Register/>}/>
                                <Route path={"*"} element={<Login/>}/>
                            </>

                }

            </>
        )
    );

    return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
