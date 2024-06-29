import React, {useState} from 'react';

import GiftsetCard from './GiftsetCard';

const giftsetList = [
	{
		id: 1,
		name: 'Набор «Вьетнамский кофе»',
		description: 'Отличный подарок для ценителей кофе. Кофейные зерна тщательно отбираются и обжариваются компанией Revo с использованием технологий и ноу-хау,полученных от известных мастеров, а также с любовью и страстью кофеварки, создавая чашки чистого кофе только для вас.',
		image: "images/best.png",
		price: 28500,
		beansType: 'Изысканная смесь робусты',
		height: '700 - 800m',
		color: '',
	},
	{
		id: 2,
		name: 'Набор «Вьетнамский кофе»',
		description: 'Отличный подарок для ценителей кофе. Кофейные зерна тщательно отбираются и обжариваются компанией Revo с использованием технологий и ноу-хау,полученных от известных мастеров, а также с любовью и страстью кофеварки, создавая чашки чистого кофе только для вас.',
		image: "images/best.png",
		price: 28500,
		beansType: 'Изысканная смесь робусты',
		height: '700 - 800m',
		color: 'green',
	},
	{
		id: 3,
		name: 'Набор «Вьетнамский кофе»',
		description: 'Отличный подарок для ценителей кофе. Кофейные зерна тщательно отбираются и обжариваются компанией Revo с использованием технологий и ноу-хау,полученных от известных мастеров, а также с любовью и страстью кофеварки, создавая чашки чистого кофе только для вас.',
		image: "images/best.png",
		price: 28500,
		beansType: 'Изысканная смесь робусты',
		height: '700 - 800m',
		color: 'blue',
	},
];

const GiftsetList = () => {
	const [activeTab, setActiveTab] = useState(giftsetList[0].id);
	const handleTabClick = (id) => {
		setActiveTab(id);
	};

	return (
		<div className="tabs">
			<div className="tabs__right">
				{giftsetList.map((giftset) => (
					<button
						key={giftset.id}
						className={`btn-reset tabs__control ${activeTab === giftset.id ? 'active tabs__control--border' : ''}`}
						onClick={() => handleTabClick(giftset.id)}
					>
						<span className="subtitle tabs__item">{giftset.id}</span>
					</button>
				))}
			</div>
			<div className="tab-content">
				{giftsetList.map((giftset) => (
					<GiftsetCard
						key={giftset.id}
						giftset={giftset}
						className={`${activeTab === giftset.id ? 'active' : ''}`}
					>
					</GiftsetCard>
				))}
			</div>
		</div>
	);
};

export default GiftsetList;