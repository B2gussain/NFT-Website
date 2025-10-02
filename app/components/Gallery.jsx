"use client";
import React, { useState } from "react";

const Gallery = () => {
    const images = [
        { img: "/images/c1.jpg" },
        { img: "/images/c3.jpg" },
        { img: "/images/c2.jpg" },
        { img: "/images/c4.jpg" },
        { img: "/images/c5.jpg" },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div className="h-[50vh] md:h-[100vh] flex flex-col relative justify-center items-center">
            <div className="flex p-4 md:p-6  justify-center items-center gap-2 md:gap-4 transition-all duration-500 overflow-hidden">
                {images.map((item, idx) => (
                    <img
                        key={idx}
                        src={item.img}
                        alt={`gallery-${idx}`}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => setActiveIndex(idx)}
                        className={`object-cover transition-all duration-500 cursor-pointer rounded-xl
                            ${
                                activeIndex === idx
                                    ? "w-40 sm:w-52 md:w-60 lg:w-72"
                                    : "w-20 sm:w-28 md:w-32 lg:w-36 opacity-80"
                            }
          `}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
