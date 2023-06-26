import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
	{
		path: "/home",
		display: "Inicio",
	},
	{
		path: "/about",
		display: "Nosotros",
	},
	{
		path: "/tours",
		display: "Lugares",
	},
];

const quick__links2 = [
	{
		path: "/news",
		display: "Noticias",
	},
	{
		path: "/login",
		display: "Iniciar",
	},
	{
		path: "/register",
		display: "Registrarse",
	},
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="3">
						<div className="logo">
							<img src={logo} alt="" />
							<p>"La Sucursal de Cielo"</p>
							<div className="social__link d-flex align-items-center gap-4">
								{/* <span>
									<Link to="#">
										<i class="ri-youtube-line"></i>
									</Link>
								</span>
								<span>
									<Link to="#">
										<i class="ri-github-fill"></i>
									</Link>
								</span> */}
								<span>
									<a
										href="https://www.facebook.com/profile.php?id=100091955539406"
										target="_blank"
									>
										<i class="ri-facebook-circle-line"></i>
									</a>
								</span>
								<span>
									<a
										href="https://www.instagram.com/sanpedrodecolalaotucuman/"
										target="_blank"
									>
										<i class="ri-instagram-line"></i>
									</a>
								</span>
							</div>
						</div>
					</Col>

					<Col lg="3">
						<h5 className="footer__link-title">Descubrir</h5>

						<ListGroup className="footer__quick-links">
							{quick__links.map((item, index) => (
								<ListGroupItem key={index} className="ps-0 border-0">
									<Link to={item.path}>{item.display}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">enlaces rápidos</h5>

						<ListGroup className="footer__quick-links">
							{quick__links2.map((item, index) => (
								<ListGroupItem key={index} className="ps-0 border-0">
									<Link to={item.path}>{item.display}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">Contacto</h5>

						<ListGroup className="footer__quick-links">
							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex align-items-center gap-2">
									<span>
										<i class="ri-map-pin-line"></i>
									</span>
									Address:
								</h6>
								<p className="mb-0 imail" style={{ fontSize: "0.8rem" }}>
									San Pedro de Colalao
								</p>
							</ListGroupItem>

							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex align-items-center gap-2">
									<span>
										<i class="ri-mail-line"></i>
									</span>
									Email:
								</h6>

								<p className="mb-0 imail" style={{ fontSize: "0.8rem" }}>
									sanpedrodecolalao.tucuman@gmail.com
								</p>
							</ListGroupItem>

							{/* <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex align-items-center gap-2">
									<span>
										<i class="ri-phone-fill"></i>
									</span>
									Phone:
								</h6>

								<p className="mb-0">+543814454199</p>
							</ListGroupItem> */}
						</ListGroup>
					</Col>

					<Col lg="12" className="text-center pt-5">
						<p className="copyright">
							Copyright {year}, design and develop by TechSiteMasters. All
							rights reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
