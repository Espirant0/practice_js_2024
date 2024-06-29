import React from 'react';
import Footer from "../template/Footer";

const OrderSuccess = () => {
	return (
		<div className="wrapper">
			<main className="main">
				<section className="features" id="section-features">
					<div className="container section">
						<h2 className="subtitle features__title">
							Заказ успешно оформлен!
						</h2>
						<span className="section-caption features__caption">
							Пожалуйста, ожидайте, с вами свяжется наш продавец.
						</span>
						<div className="carusel__btns">
							<a href="/" className="btn btn-typography">На главную</a>
						</div>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default OrderSuccess;