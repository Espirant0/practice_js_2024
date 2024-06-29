import React from 'react';

import Footer from '../template/Footer';
import Header from './header/Header';
import Features from './features/Features';
import Coffee from './coffee/Coffee';
import Combo from './combo/Combo';
import Giftset from './giftset/Giftset';

const Home = () => {
	return (
		<div className="wrapper">
			<Header></Header>
			<main className="main">
				<Features></Features>
				<Coffee></Coffee>
				<Giftset></Giftset>
				<Combo></Combo>
			</main>
			<Footer></Footer>
		</div>
	);
};
export default Home;