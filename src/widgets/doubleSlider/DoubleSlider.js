import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DoubleSlider.css';
import CoffeeCard from "../../pages/home/coffee/CoffeeCard";

const DoubleSlider = ({slides}) => {
	const settings = {
		draggable: true,
		ltr: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		arrows: true,
		accessibility: true,
		rows: 2,
		adaptiveHeight: true,
		className: "carusel__line"
	};

	return (
		<Slider {...settings}>
			{slides.map((slide, index) => (
				<CoffeeCard key={index} coffee={slide}/>
			))}
		</Slider>
	);
};

export default DoubleSlider;