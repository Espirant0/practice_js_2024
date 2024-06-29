import React from 'react';
import Footer from '../template/Footer';

const NotFound = () => {
	return (
		<div className="wrapper">
			<main className="main">
				<section className="features" id="section-features">
					<div className="container section">
						<h2 className="subtitle features__title">
							Ошибка 404
						</h2>
						<span className="section-caption features__caption">
					Страница не найдена.
				</span>
						<div className="carusel__btns">
							<a href="/" className="btn btn-typography carusel__btn">На главную</a>
						</div>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default NotFound;