import React from 'react';

const FeatureCard = ({feature}) => {
	return (
		<article className="card__item">
			<img className="card__icon card__icon--one" src={feature.image}></img>
			<h3 className="title-product card__title">{feature.name}</h3>
			<p className="card__text">{feature.description}</p>
		</article>
	);
};
export default FeatureCard;