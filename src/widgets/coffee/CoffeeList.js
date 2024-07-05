import React from 'react';
import DoubleSlider from "../../shared/doubleSlider/DoubleSlider";

const coffeeList = [
	{
		id: 1,
		name: 'REVO Morning',
		description: 'Горьковато-сладкое послевкусие, цветочный аромат',
		price: 9900,
		image: "images/fav-1.png",
		alt: 'The packet REVO Morning',
	},
	{
		id: 2,
		name: 'REVO Origin',
		description: 'Послевкусие сладкое, кисловатый клубничный вкус.',
		price: 13900,
		image: "images/fav-4.png",
		alt: 'The packet REVO Origin',
	},
	{
		id: 3,
		name: 'REVO Everyday',
		description: 'Горьковатое послевкусие, шоколадный вкус.',
		price: 8500,
		image: "images/fav-2.png",
		alt: 'The packet REVO Everyday',
	},
	{
		id: 4,
		name: 'REVO Honey',
		description: 'Горьковато-сладкое послевкусие, цветочный аромат',
		price: 9900,
		image: "images/fav-3.png",
		alt: 'The packet REVO Honey',
	},
	{
		id: 5,
		name: 'REVO Bold',
		description: 'Насыщенный, горький, традиционный',
		price: 7500,
		image: "images/fav-5.png",
		alt: 'The packet REVO Bold',
	},
	{
		id: 6,
		name: 'REVO Natural',
		description: 'Сладкое послевкусие, кисловатый клубничный вкус.',
		price: 13900,
		image: "images/fav-6.png",
		alt: 'The packet REVO Natural',
	},
];

const CoffeeList = () => {
	return (
		<DoubleSlider slides={coffeeList}/>
	);
};
export default CoffeeList;