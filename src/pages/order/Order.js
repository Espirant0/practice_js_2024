import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import Footer from "../template/Footer";

const Order = ({value, onChange}) => {
	const [phone, setPhone] = useState('');
	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};
	return (
		<div className="wrapper">
			<main className="main">
				<div className="order_back_btn">
					<a href="/" className="btn btn-typography">На главную</a>
				</div>
				<section className="features" id="section-features">
					<div className="container section">
						<h2 className="subtitle features__title">
							Введите ваши данные
						</h2>
						<form action="/order/success">
							<div className="input-container">
								<input type="text" placeholder={"Ваше имя"} className={"order-input"} required={true}/>
								<InputMask
									placeholder={"Ваш номер телефона"}
									mask="+7 (999) 999-99-99"
									value={value}
									onChange={onChange}
									className={"order-input"}
									required={true}
								>
									{(inputProps) => <input {...inputProps} type="tel"/>}
								</InputMask>
							</div>
							<div className="carusel__btns">
								<button className="btn btn-typography form-btn">Отправить</button>
							</div>
						</form>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default Order;