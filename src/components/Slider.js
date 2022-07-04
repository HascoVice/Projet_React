import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "./Slider.css";
import Goku1 from "../assets/carrousel_img/dragon-4.png";
import Goku2 from "../assets/carrousel_img/dragon-2.png";
import Goku3 from "../assets/carrousel_img/dragon-3.png";
import btnslider from "../assets/carrousel_img/gauche-droite.png";


function Slider () {

    
    const datas = [
        {
            id: 1,
            image: Goku1,
            title: "Titre du slider 1",
            text: `lorem ipsum dolor sit`
        },
        {
            id: 2,
            image: Goku2,
            title: "Titre du slider 1",
            text: `lorem ipsum dolor sit`
        },

        {
            id: 3,
            image: Goku3,
            title: "Titre du slider 1",
            text: `lorem ipsum dolor sit`
        },
    ]

    return (
        <Carousel autoPlay interval={4000} infiniteLoop thumbWidth={120} showIndicators={false} showStatus={false}>
            {datas.map(slide => (
                <>
                <div className='sliderbouge' key={slide.id}>
                    <img src={slide.image} alt=""/>
                </div>
                <div className='div-slider'>
                    <img className="btn-slider-gauche"src={btnslider} alt=""/>
    
                </div>
                <div className='div-slider'>
                <img className="btn-slider-droite"src={btnslider} alt=""/>
                </div>
                
                </>

            ))}
        </Carousel>
    )
}


export default Slider;