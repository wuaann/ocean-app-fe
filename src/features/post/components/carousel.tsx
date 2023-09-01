'use client';

import {Carousel} from 'flowbite-react';
import * as React from 'react';
import {Image} from "../../../models";


export interface CarouselProps {
    images: Image
}

export function CarouselImg({images}: CarouselProps) {

    const listImages:Image[] = []


    listImages.push(images);


    return (
        <>
            {
                listImages.length > 1 ?
                    <>
                        <Carousel slide={false} className={"rounded-xl border border-gray-700"}>
                            {
                                listImages.map(item => (

                                    <img
                                        key={item.id}
                                        src={item.url}
                                        alt=" 1"
                                        className={"h-full w-full object-cover"}
                                    />
                                ))
                            }
                        </Carousel>
                    </> :
                    <>
                        <img
                            src={listImages[0].url}
                            alt={"3"}
                            className="h-full w-full object-cover"
                        />

                    </>
            }


        </>
    );
};