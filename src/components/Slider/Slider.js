import React from "react";
import Slider from "react-slick";
import bootImage from "../../assets/images/SYDBcVgqXO-removebg-preview 1.svg";
import {CustomArrow} from "../CustomArrow/CustomArrow";

export const CustomSlider = ({customArrowNextClassList, customArrowPrevClassList}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <CustomArrow customArrowClassList={customArrowNextClassList}/>,
        prevArrow: <CustomArrow customArrowClassList={customArrowPrevClassList}/>
    };
    return (
        <div>
            <Slider {...settings}>
                <img src={bootImage} alt='boot'/>
                <img src={bootImage} alt='boot'/>
                <img src={bootImage} alt='boot'/>
            </Slider>
        </div>
    );
}