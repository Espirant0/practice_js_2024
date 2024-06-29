import React from 'react';

import Footer from '../template/Footer';

const Confidential = () => {
	return (
		<div className="wrapper">
			<main className="main">
				<div className="policy_btn">
					<a href="/" className="btn btn-typography">На главную</a>
				</div>
				<section>
					<div className="container section policy_container">
						<h2 className="subtitle features__title">
							Политика конфиденциальности
						</h2>
						<div className="policy_container_wrapper">
							<h3 className="card__text">1. Общие положения</h3>
							<p className="card__text">1.1. Настоящая Политика конфиденциальности (далее – Политика)
								определяет
								порядок
								обработки и защиты персональных данных пользователей сайта (далее – Пользователи),
								продающего
								кофе
								(далее – Сайт).</p>
							<p className="card__text">1.2. Использование Сайта означает согласие Пользователя с
								настоящей Политикой
								и
								условиями обработки его персональных данных.</p>
							<h3 className="card__text">2. Сбор и использование персональных данных</h3>
							<p className="card__text">2.1. Персональные данные Пользователя, которые могут быть собраны,
								включают,
								но не
								ограничиваются: имя, фамилия, адрес электронной почты, номер телефона, адрес
								доставки.</p>
							<p className="card__text">2.2. Сайт собирает и использует персональные данные Пользователя
								для следующих
								целей:
								- Обработка заказов и доставка товаров;
								- Обратная связь с Пользователем;
								- Улучшение качества обслуживания;
								- Информирование о новинках, акциях и специальных предложениях.</p>
							<h3 className="card__text">3. Защита персональных данных</h3>
							<p className="card__text">3.1. Сайт принимает необходимые организационные и технические меры
								для защиты
								персональных данных Пользователя от неправомерного или случайного доступа, уничтожения,
								изменения,
								блокирования, копирования, распространения, а также от иных неправомерных действий
								третьих
								лиц.</p>
							<p className="card__text">3.2. Доступ к персональным данным имеют только уполномоченные
								сотрудники,
								которым
								эти данные необходимы для выполнения своих должностных обязанностей.</p>
							<h3 className="card__text">4. Передача персональных данных третьим лицам</h3>
							<p className="card__text">4.1. Сайт не передает персональные данные Пользователя третьим
								лицам, за
								исключением случаев, предусмотренных законодательством.</p>
							<p className="card__text">4.2. Передача персональных данных третьим лицам может
								осуществляться с
								согласия
								Пользователя, а также в случаях, когда это необходимо для выполнения заказа (например,
								передача
								данных курьерской службе).</p>
							<h3 className="card__text">5. Права Пользователя</h3>
							<p className="card__text">5.1. Пользователь имеет право на получение информации о своих
								персональных
								данных,
								их исправление, блокирование или уничтожение в случае, если данные являются неполными,
								устаревшими,
								неточными или незаконно полученными.</p>
							<p className="card__text">5.2. Для реализации своих прав Пользователь может обратиться к
								администрации
								Сайта
								по контактным данным, указанным на Сайте.</p>
							<h3 className="card__text">6. Изменения в Политике конфиденциальности</h3>
							<p className="card__text">6.1. Сайт оставляет за собой право вносить изменения в настоящую
								Политику.
								Новая
								редакция Политики вступает в силу с момента ее размещения на Сайте, если иное не
								предусмотрено
								новой
								редакцией Политики.</p>
							<h3 className="card__text">7. Контактная информация</h3>
							<p className="card__text">7.1. По всем вопросам, связанным с настоящей Политикой
								конфиденциальности,
								Пользователь может обратиться к администрации Сайта по следующим контактным данным:
								+7999999999.</p>
						</div>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default Confidential;