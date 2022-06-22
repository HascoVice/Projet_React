import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "./Slider.css";


function Slider () {

    const baseURL = "http://react-responsive-carousel.js.org/assets/"
    const datas = [
        {
            id: 1,
            image: `./Image/1.jfif`,
            title: "Titre du slider 1",
            text: `lorem ipsum dolor sit`
        },
        {
            id: 2,
            image: `${baseURL}2.jpeg`,
            title: "Titre du slider 1",
            text: `lorem ipsum dolor sit`
        },

        {
            id: 3,
            image: `${baseURL}1.jpeg`,
            title: "Titre du slider 1",
            text: `lorem ipsum dolor sit`
        },
    ]

    return (
        <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={120} showIndicators={false} showStatus={false}>
            {datas.map(slide => (
                <div key={slide.id}>
                    <img src={slide.image} alt=""/>
                    <div className='overlay'>
                        <h2 className='overlay_title'>{slide.title}</h2>
                        <p className='overlay_text'>{slide.text}</p>
                    </div>     
                </div>

            ))}
        </Carousel>
    )
}


export default Slider;