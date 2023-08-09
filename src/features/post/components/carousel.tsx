'use client';

import { Carousel } from 'flowbite-react';import * as React from 'react';
// import {Carousel} from "@material-tailwind/react";
import {Image} from "../../../models";


export interface CarouselProps{
    images: Image[]
}

export function CarouselImg({images}: CarouselProps) {
    return (
        <>
            {
                images.length > 1 ?
                    <>
                        <Carousel slide={false}  className={"rounded-xl border border-gray-700"}>
                            {
                                images.map(item =>(

                                    <img
                                        key={item.id}
                                        src={item.url}
                                        alt=" 1"
                                        className={"h-full w-full object-cover"}
                                    />
                                ))
                            }
                        </Carousel>
                    </>:
                    <>

                        <img

                            src={images[0].url}
                            alt={"3"}
                            className="h-full w-full object-cover"
                        />


                    </>
            }

</>
    );
};