import React from 'react';

function HomePage() {
    return (
        <div className={" w-[70%] m-auto grid grid-flow-col-dense"}>
            <div className={"col-span-4"}>
                <div className={"items-center flex flex-row gap-2 "}>
                    <div className={" items-center flex flex-col cursor-pointer "}>
                        <img className={"h-20 w-20 p-1 border-blue-600 border-2 rounded-full object-cover"}
                             src="https://i.pinimg.com/564x/80/cd/47/80cd47ce28fe36e705acb754662bd468.jpg" alt=""/>
                        <p className={"text-white"}>miinwuan</p>
                    </div>

                    <div className={"items-center flex flex-col cursor-pointer "}>
                        <img className={" h-20 w-20 p-1 border-gray-600 border  rounded-full object-cover  "}
                             src="https://i.pinimg.com/564x/ee/c1/85/eec185b08aa46d195d136f177cc3ac6b.jpg" alt=""/>
                        <p className={"text-white"}>miinwuan</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className={"text-white flex flex-row justify-between   "}>
                    <div className={"flex flex-row gap-2 items-center"}>
                        <img className={"h-20 w-20 rounded-full cursor-pointer"}
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
    );
}

export default HomePage;