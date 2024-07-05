import React from 'react';

const CoffeeCard = ({coffee}) => {
	return (
		<article className="carusel__item">
			<div className="carusel__box-img">
				<img className="carusel__img" src={coffee.image} alt={coffee.alt}/>
			</div>
			<div className="carusel__desc">
				<span className="price-accente carusel__price">{coffee.price} руб</span>
				<h2 className="title-product carusel__title">{coffee.name}</h2>
				<div className="carusel__text">
					{coffee.description}
				</div>
				<div className="carusel__btns">
					<a href="/order" className="btn btn-typography carusel__btn">КУПИТЬ
						СЕЙЧАС</a>
				</div>
			</div>
		</article>
	);
};
export default CoffeeCard;