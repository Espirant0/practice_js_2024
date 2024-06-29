import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/home/Home';
import Confidential from './pages/confidential/Confidential';
import NotFound from './pages/notfound/NotFound';
import Order from './pages/order/Order';
import OrderSuccess from './pages/ordersuccess/OrderSuccess';


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="*" element={<NotFound/>}/>
				<Route path="/order" element={<Order/>}/>
				<Route path="/order/success" element={<OrderSuccess/>}/>
				<Route path="/confidential" element={<Confidential/>}/>
			</Routes>
		</Router>
	);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);