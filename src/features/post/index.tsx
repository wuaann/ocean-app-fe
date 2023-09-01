import React, {useEffect} from 'react';

import {Story} from "./components/story";
import {Post} from "./components/post";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {postActions, selectListPost} from "./postSlice";


function HomePage() {

    const dispatch = useAppDispatch()

    useEffect(() =>{
        dispatch(postActions.getAllPost())

    },[])
    const ListPost = useAppSelector(selectListPost)
    return (
        <>

            <div className={" w-[60%] m-auto py-5 grid gap-2 grid-flow-col-dense "}>

                <div className={"col-span-4 "}>
                    <Story/>
                    <div className={"flex flex-col"}>
                        <Post listPost={ListPost.data}/>
                    </div>
                </div>

                <div>
                    <div className={"text-white flex mt-5 flex-row justify-between   "}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <img className={"h-14 w-14 rounded-full cursor-pointer"}
                                 src="https://i.pinimg.com/564x/d3/b9/b3/d3b9b3b7920a86333105632aa109a41b.jpg" alt=""/>

                            <div>
                                <p>minwuan</p>
                                <p>wuan</p>
                            </div>
                        </div>
                        <div className={"text-indigo-500 flex items-center  cursor-pointer"}>
                            <p>switch</p>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}

export default HomePage;