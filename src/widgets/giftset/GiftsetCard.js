import React from 'react';

const GiftsetCard = ({giftset, className}) => {
	return (
		<div className={`tabs__left-content ${className}`}>
			<img className={`tabs__img tabs__img--${giftset.color}`} src={giftset.image}
				 alt="The REVO pack"/>
			<article className="tabs__content">
				<span className="price-accente tabs__price">{giftset.price} руб</span>
				<h2 className="title-product tabs__title">{giftset.name}</h2>
				<p className="tabs__text">
					{giftset.description}
				</p>
				<div className="tabs__desc">
					<div className="tabs__data">
						<div className="tabs__data-img">
							<img className="tabs__icon tabs__icon--beans"
								 src="images/giftset-coffee.svg"></img>
						</div>
						<div className="tabs__data-desc">
							<span className="tabs__data-item">Тип зёрен</span>
							<span
								className="tabs__data-info">{giftset.beansType}</span>
						</div>
					</div>

					<div className="tabs__data">
						<div className="tabs__data-img">
							<img className="tabs__icon tabs__icon--mountains"
								 src="images/giftset-mountains.svg"></img>
						</div>
						<div className="tabs__data-desc">
							<span className="tabs__data-item">Высота</span>
							<span className="tabs__data-info">{giftset.height}</span>
						</div>
					</div>
				</div>
				<div className="tabs__btns">
					<a href="/order" className="btn btn-typography tabs__btn">КУПИТЬ СЕЙЧАС</a>
				</div>
			</article>
		</div>
	);
};
export default GiftsetCard;