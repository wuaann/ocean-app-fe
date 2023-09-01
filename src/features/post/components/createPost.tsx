import React, {useState} from 'react';
import {faImages} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CreatePost() {
    const [image,setImage] = useState<File>()

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;


        if (files && files.length > 0) {
            const file = files[0];
            setImage(file);
        }
    }

    return (
        <>
            <div className={"w-[80%] fixed h-screen"}>
                <div className={"fixed  bg-black opacity-60 truncate w-[100%]  h-screen"}></div>
                {/*<FontAwesomeIcon className={" absolute right-0  text-3xl text-white"} icon={faX} />*/}
                <div
                    className={" text-white absolute w-1/2 z-10 right-1/2 h-3/4 top-20 rounded transform translate-x-1/2 bg-[#262626]"}>
                    <div className={"w-full text-center py-2 border-b-[1px] border-[#5C5C5C]"}>
                        <p className={"font-bold"}>Create new post</p>
                    </div>
                    <div className={"flex flex-col h-full justify-center items-center"}>
                        <FontAwesomeIcon className={"text-7xl"} icon={faImages}/>
                        <p className={"my-4"}>Drag photos and videos here</p>
                        <div>
                            <input onChange={handleImage} type="file" id="fileInput" className="hidden"/>
                            <div className="relative">
                                <label htmlFor="fileInput"
                                       className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out">Upload
                                    File</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CreatePost;