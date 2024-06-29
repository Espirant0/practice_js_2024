import React from 'react';
import Navigation from '../../template/Navigation';

const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<div className="header__row header__row--left">
					<div className="header__column">
						<a href="#" className="header__logo" title="Revo Your Personalized coffee">
							<img className="header__img logotype" src="images/logo.svg"></img>
						</a>
						<label className="header__label" htmlFor="burger">
							<button className="btn-reset burger" id="burger"></button>
						</label>
					</div>
					<h1 className="title header__title">
						<span className="title header__title-item animated">Твой</span>
						<span
							className="title header__title-item header__title-item--background animated active">Персональный</span>
						<span className="title header__title-item animated">Кофе</span>
					</h1>
				</div>
				<div className="header__row header__row--center">
					<div className="header__video video">
						<div className="video__container">
							<video width="720" className="video__video" poster="images/hero.jpg" autoPlay
								   loop muted playsInline>
								<source className="video__resourse" src="/videos/coffee-720.mp4" type="video/mp4"/>
								Ваш браузер не поддерживает видео.
							</video>
							<div className="video__overflow"></div>
						</div>
					</div>
				</div>
				<div className="header__row header__row--right">
					<Navigation></Navigation>
				</div>
			</div>
		</header>
	);
};

export default Header;