import React from 'react';
import InfiniteSlider from "../../shared/infiniteSlider/InfiniteSlider";

const comboList = [
	{
		id: 1,
		name: 'Комбо Revo Bold',
		description: 'Содержание кофеина в Revo Bold достаточно сильное, чтобы не дать вам уснуть на работе.',
		image: "images/card-1.png",
		alt: 'Combo Revo Bold',
		price: 12700,
		priceOld: 15500,
	},
	{
		id: 2,
		name: 'Комбо Revo Everyday',
		description: 'Revo Everyday – это смесь горького вкуса зерен робусты и аромата арабики.',
		image: "images/card-2.png",
		alt: 'Combo Revo Everyday',
		price: 13600,
		priceOld: 16500,
	},
	{
		id: 3,
		name: 'Комбо Revo Honey',
		description: 'Мед - в названии Revo Honey происходит от способа обработки зерен арабики.',
		image: "images/card-3.png",
		alt: 'Combo Revo Honey',
		price: 21500,
		priceOld: 26000,
	},
	{
		id: 4,
		name: 'Комбо Revo Natural',
		description: 'После сбора спелых кофейных ягод фермеры сушат весь плод на солнце не менее 30 дней.',
		image: "images/card-4.png",
		alt: 'Combo Revo Natural',
		price: 22000,
		priceOld: 24600,
	},
];

const ComboList = () => {
	return (
		<InfiniteSlider slides={comboList}/>
	);
};
export default ComboList;