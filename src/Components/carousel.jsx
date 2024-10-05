import React, { useEffect, useState } from 'react';
import "./carousel.css";

import carImg1 from '../assets/carousel1.png'
import carImg2 from '../assets/carousel2.png'
import carImg3 from '../assets/carousel3.png'
import carImg4 from '../assets/carousel4.png'

export const Carousel = () => {   
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        carImg1,
        carImg2,
        carImg3,
        carImg4
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);    // Rotate every 3 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [items.length]);

    return (
        <>
           <div className="carousel">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item} alt={`Error`} />
                </div>
            ))}
        </div>
        </>
    );
};



