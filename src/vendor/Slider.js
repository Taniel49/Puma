import React from "react";
import Slider from "react-slick";
import bootImage from "../images/SYDBcVgqXO-removebg-preview 1.svg";
import {CustomArrow} from "../components/CustomArrow/CustomArrow";

export const CustomSlider = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <CustomArrow customArrowClassList={props.customArrowNextClassList}/>,
        prevArrow: <CustomArrow customArrowClassList={props.customArrowPrevClassList}/>
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