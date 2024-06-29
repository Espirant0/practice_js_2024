import React from 'react';

const Navigation = () => {
	return (
		<nav className="nav">
			<div className="nav__content">
				<h2 className="nav__title">
					Навигация
				</h2>
				<ul className="list-reset nav__list">
					<li className="nav__item">
						<a href="#section-features" className="nav__link nav-typography">Кофе</a>
					</li>
					<li className="nav__item">
						<a href="#section-coffee" className="nav__link nav-typography">Ассортимент</a>
					</li>
					<li className="nav__item">
						<a href="#section-giftset" className="nav__link nav-typography">Подарочный
							набор</a>
					</li>
					<li className="nav__item">
						<a href="#section-combo" className="nav__link nav-typography">Кофе комбо</a>
					</li>
					<li className="nav__item">
						<a href="/confidential" className="nav__link nav-typography">Политика
							конфиденциальности</a>
					</li>
				</ul>
			</div>
		</nav>
	);

};

export default Navigation;