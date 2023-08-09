// @flow

import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {faBookmark, faComment, faFaceSmile, faHeart, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {CarouselImg} from "./carousel";
import {Image} from "../../../models";
import SeeMoreText from "./seeMoreText";


export function Post() {

    const Images: Image[] = [
        {
            id: 1,
            url: "https://i.pinimg.com/564x/c8/1e/bd/c81ebd30ee54663b865d3efeac9b4aa8.jpg"
        },
        {
            id: 2,
            url: "https://i.pinimg.com/564x/b3/d5/2e/b3d52ec0f6709708bbc1dabfb44bb0d5.jpg"
        },
        {
            id: 3,
            url: "https://i.pinimg.com/564x/80/06/ee/8006ee886e0da3dbde1df810e13a68ce.jpg"
        }
    ]
    return (
        <>

            <div className={"text-white mt-2 w-[70%] m-auto"}>
                <div className={"flex my-2 mr-1.5 ml-1 flex-row justify-between"}>
                    <div className={"flex flex-row gap-2 items-center justify-center text-sm"}>
                        <img className={"w-8 h-8 rounded-full cursor-pointer"}
                             src="https://i.pinimg.com/564x/ee/c1/85/eec185b08aa46d195d136f177cc3ac6b.jpg"
                             alt=""/>
                        <p className={"hover:text-gray-400 cursor-pointer"}>minwuan</p>
                        <span className={"text-gray-400"}>13h</span>

                    </div>
                    <div>
                        <FontAwesomeIcon className={"hover:text-gray-400 cursor-pointer"}
                                         icon={faEllipsis}/>
                    </div>
                </div>
                <div className={"w-full h-[40rem] "}>
                    <CarouselImg images={Images}/>
                </div>


                <div className={"text-2xl mt-3 pb-1.5 flex flex-row justify-between items-center"}>
                    <div className={" flex flex-row gap-4"}>
                        <FontAwesomeIcon className={"cursor-pointer"} icon={faHeart}/>
                        <FontAwesomeIcon className={"cursor-pointer"} icon={faComment} flip="horizontal"/>
                        <FontAwesomeIcon className={"cursor-pointer"} icon={faPaperPlane}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className={"cursor-pointer"} icon={faBookmark}/>
                    </div>
                </div>
                <div className={"text-sm border-b border-gray-400"}>
                    <p>200,000 <span>likes</span></p>
                    <SeeMoreText text={"I love you hehe"} maxChar={10}/>
                    <div className={"w-full my-2 flex flex-row items-center"}>
                        <textarea className={"w-full resize-none border-0 focus:ring-0  bg-black break-all "}
                                  placeholder={"Add your comment..."}
                        />
                        <FontAwesomeIcon icon={faFaceSmile}/>
                    </div>
                </div>

            </div>




        </>
    );
};