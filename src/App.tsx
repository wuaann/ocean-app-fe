import React from 'react';

import './App.css';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import Login from "./features/auth/pages/login";
import Sidebar from "./components/Sidebar";
import HomePage from "./features/post";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={"/"} element={<Sidebar/>}>
                    <Route path={""}  element={<HomePage/>}/>
                    {/*<Route path={"/login"}  element={<Login/>}/>*/}

                </Route>
                <Route path={"login"} element={<Login/>}/>
            </>
        )
    );

    return <>
        <RouterProvider
            router={router}

        />
    </>
}

export default App;
