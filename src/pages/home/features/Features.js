import React from 'react';
import FeatureList from "./FeatureList";
import AnimatedSection from "../../../shared/animatedSection/AnimatedSection";

const Features = () => {
	return (
		<section className="features" id="section-features">
			<AnimatedSection>
				<div className="container section">
					<span className="section-caption features__caption">
						Твой персональный кофе
					</span>
					<h2 className="subtitle features__title">
						СОЗДАЙ СВОЮ КОФЕЙНУЮ БАЗУ
					</h2>
					<div className="features__inner">
						<div className="features__card card">
							<FeatureList></FeatureList>
						</div>
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
};
export default Features;