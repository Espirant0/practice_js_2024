import React from 'react';
import CoffeeList from "./CoffeeList";
import AnimatedSection from "../../../shared/animatedSection/AnimatedSection";

const Coffee = () => {
	return (
		<section className="coffee" id="section-coffee">
			<AnimatedSection>
				<div className="container section">
					<span className="section-caption coffee__caption">Выберите свой любимый</span>
					<h2 className="subtitle coffee__title">
						НАСТОЯЩИЙ СТАНДАРТ
					</h2>
					<div className="coffee__inner">
						<CoffeeList></CoffeeList>
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
};
export default Coffee;