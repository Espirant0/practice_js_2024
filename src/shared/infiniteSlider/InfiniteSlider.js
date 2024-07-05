import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './InfiniteSlider.css';
import ComboCard from "../../widgets/combo/ComboCard";

const InfiniteSlider = ({slides}) => {
	const settings = {
		draggable: true,
		ltr: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: null,
		variableWidth: true,
		adaptiveHeight: false,
		pauseOnHover: true,
		lazyLoad: false,
	};

	return (
		<Slider {...settings}>
			{slides.map((slide, index) => (
				<ComboCard key={index} combo={slide}></ComboCard>
			))}
		</Slider>
	);
};

export default InfiniteSlider;