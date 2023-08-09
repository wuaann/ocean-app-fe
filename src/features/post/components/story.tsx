
import * as React from 'react';

type Props = {};

export function Story(props: Props) {
    return (
        <>
            <div className={"items-center mt-5 flex flex-row gap-2 "}>
                <div className={" items-center flex flex-col cursor-pointer "}>
                    <img className={"h-14 w-14 p-1 border-blue-600 border-2 rounded-full object-cover"}
                         src="https://i.pinimg.com/564x/80/cd/47/80cd47ce28fe36e705acb754662bd468.jpg" alt=""/>
                    <p className={"text-white"}>miinwuan</p>
                </div>

                <div className={"items-center flex flex-col cursor-pointer "}>
                    <img className={" h-14 w-14 p-1 border-gray-600 border  rounded-full object-cover  "}
                         src="https://i.pinimg.com/564x/ee/c1/85/eec185b08aa46d195d136f177cc3ac6b.jpg" alt=""/>
                    <p className={"text-white"}>miinwuan</p>
                </div>
            </div>
        </>
    );
};