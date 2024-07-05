import React from 'react';

const ComboCard = ({combo}) => {
	return (
		<article className="slider__item">
			<div className="slider__box-img">
				<img src={combo.image} alt={combo.alt}
					 className="slider__img"></img>
			</div>
			<div className="slider__desc">
				<div className="slider__price-box">
					<span className="price-accente slider__price">{combo.price} руб</span>
					<span className="price-default slider__price-old">{combo.priceOld} руб</span>
				</div>
				<h3 className="title-product slider__title-product">{combo.name}</h3>
				<p className="slider__text">{combo.description}</p>
				<div className="slider__btns">
					<a href="/order" className="btn btn-typography slider__btn">КУПИТЬ СЕЙЧАС</a>
				</div>
			</div>
		</article>
	);
};
export default ComboCard;