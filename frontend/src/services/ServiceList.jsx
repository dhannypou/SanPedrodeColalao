import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
	{
		imgUrl: weatherImg,
		title: `Calcular el tiempo`,
		desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
	},
	{
		imgUrl: guideImg,
		title: `Mejor guía turístico`,
		desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
	},
	{
		imgUrl: customizationImg,
		title: "personalización",
		desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
	},
];

const ServiceList = () => {
	return (
		<>
			{servicesData.map((item, index) => (
				<Col lg="3" md="6" sm="12" className="mb-4" key={index}>
					<ServiceCard item={item} />
				</Col>
			))}
		</>
	);
};

export default ServiceList;
