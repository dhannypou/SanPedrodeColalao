import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
	return (
		<section className="newsletter">
			<Container>
				<Row>
					<Col lg="6">
						<div className="newsletter__content">
							<h2>
								Suscríbase ahora para obtener información útil sobre viajes
							</h2>

							<div className="newsletter__input">
								<input
									type="email"
									placeholder="Introduce tu correo electrónico"
								/>
								<button className="btn newsletter__btn">Suscríbete</button>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati adipisici sunt in, provident facere ipsam?
							</p>
						</div>
					</Col>
					<Col lg="6">
						<div className="newsletter__img">
							<img src={maleTourist} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default NewsLetter;
