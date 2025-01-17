import React from 'react';
import AnimatedSection from "../../../shared/animatedSection/AnimatedSection";
import GiftsetList from "../../../widgets/giftset/GiftsetList";

const Giftset = () => {
	return (
		<section className="giftset" id="section-giftset">
			<div className="container section">
				<AnimatedSection>
					<span className="section-caption giftset__caption">Лучший подарок для друзей</span>
					<h2 className="subtitle giftset__title">
						ПОДАРОЧНЫЙ НАБОР
					</h2>
					<div className="giftset__inner">
						<GiftsetList></GiftsetList>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
};
export default Giftset;