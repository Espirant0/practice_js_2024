import React from 'react';
import ComboList from "../../../widgets/combo/ComboList";
import AnimatedSection from "../../../shared/animatedSection/AnimatedSection";

const Combo = () => {
	return (
		<section className="combo" id="section-combo">
			<div className="container section">
				<AnimatedSection>
					<span className="section-caption combo__caption">Ваш персонализированный кофе</span>
					<h2 className="subtitle combo__title">
						КОФЕ КОМБО
					</h2>
					<div className="combo__inner">
						<div className="combo__slider slider">
							<div className="slider__line">
								<ComboList></ComboList>
							</div>
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
};
export default Combo;