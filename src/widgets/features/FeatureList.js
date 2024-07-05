import React from 'react';
import FeatureCard from './FeatureCard';

const featureList = [
	{
		id: 1,
		name: 'Качество',
		description: 'Кофейные зерна арабика и робуста соответствуют международным стандартам качества.',
		image: "images/coffee-1.svg",
	},
	{
		id: 2,
		name: 'Обработка',
		description: 'Каждое кофейное зерно — это высококонцентрированный процесс, выполняемый мастером приготовления кофе.',
		image: "images/coffee-2.svg",
	},
	{
		id: 3,
		name: 'Зёрна',
		description: '70% качества чашки кофе зависит от происхождения и качества зеленых зёрен.',
		image: "images/coffee-3.svg",
	},
	{
		id: 4,
		name: 'Приготовление',
		description: 'Кофейные зерна преображаются в результате тщательного и строгого процесса обжарки.',
		image: "images/coffee-4.svg",
	},
];

const FeatureList = () => {
	return (
		featureList.map(feature => (
			<FeatureCard key={feature.id} feature={feature}></FeatureCard>
		))
	);
};
export default FeatureList;