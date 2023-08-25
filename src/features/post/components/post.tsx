// @flow

import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {faBookmark, faComment, faFaceSmile, faHeart, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {CarouselImg} from "./carousel";
import { PostModel} from "../../../models";
import SeeMoreText from "./seeMoreText";



interface postProp {
    listPost: PostModel[]
}

export function Post({listPost}: postProp) {
    
    return (
        <>
            {
                listPost.map((value) => (

                        <div key={value.id} className={"text-white mt-2 w-[70%] m-auto"}>
                            <div className={"flex my-2 mr-1.5 ml-1 flex-row justify-between"}>
                                <div className={"flex flex-row gap-2 items-center justify-center text-sm"}>
                                    <img className={"w-8 h-8 rounded-full cursor-pointer"}
                                         src={value.user.avatar}
                                         alt=""/>
                                    <p className={"hover:text-gray-400 cursor-pointer"}>
                                        {value.user.last_name + value.user.last_name}
                                    </p>
                                    <span className={"text-gray-400"}>{value.created_at}</span>

                                </div>
                                <div>
                                    <FontAwesomeIcon className={"hover:text-gray-400 cursor-pointer"}
                                                     icon={faEllipsis}/>
                                </div>
                            </div>
                            <div className={"w-full h-[40rem] "}>

                                <CarouselImg images={value.images}/>
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
                                <SeeMoreText text={value.caption} maxChar={10}/>
                                <div className={"w-full my-2 flex flex-row items-center"}>
                        <textarea className={"w-full resize-none border-0 focus:ring-0  bg-black break-all "}
                                  placeholder={"Add your comment..."}
                        />
                                    <FontAwesomeIcon icon={faFaceSmile}/>
                                </div>
                            </div>

                        </div>

                ))
            }
        </>
    );
};