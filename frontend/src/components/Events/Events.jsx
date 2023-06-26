import React, { useRef, useEffect, useState } from 'react'
// import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { Container } from "reactstrap";
import style from './Events.module.css';
import axios from 'axios';

const Events = () => {

	const [data, setData] = useState([])
	// const events = useFetch(`${BASE_URL}/events`);
	// console.log(events.error, events.loading);

	
	useEffect(() => {
		const getAxios = async () => {
			const res = await axios.get(`${BASE_URL}/events`)
			if(res){
				setData(res.data.data)
			}
		}
		getAxios();
		
	  }, []);


  return (
	<Container>
		<h1 className={style.title}>Proximos Eventos</h1>
		<ul className={style.eventContainer}>
			{
				data.length > 0 ? data.map(e => {
					return ( <li key={e._id} className={style.listContainer}>
						<p className={style.eventName}>🎊{e.name}🎊</p>
						<p><i>Lugar:</i> {e.location}</p>
						<p><i>Hora:</i> {e.time}</p>
						<p><i>Fecha:</i> {e.date}</p>
						<p><i>Categoria:</i> {e.category}</p>
						<img className={style.eventImage} src={e.image} alt={e.name} />
					</li> )
				}) :( <li>
						<p style={{ fontWeight:"bold" }}>No hay eventos disponibles</p>
					</li> )
			}

		</ul>
	</Container>
  )
}

export default Events
























// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import heroImg from "../../assets/images/hero-img01.png";
// import heroImg02 from "../../assets/images/hero-img02.png";
// import heroimg03 from "../../assets/images/hero-img03.png";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./events.css";

// // import required modules
// import { Pagination } from "swiper";

// const Events = () => {
// 	return (
// 		<Container>
// 			<Row>
// 				<Col lg="2">
// 					<h2> NUESTRAS FIESTAS ESPECIALES </h2>
// 				</Col>
// 				<Col lg="10">
// 					<Swiper
// 						slidesPerView={3}
// 						spaceBetween={10}
// 						/* centeredSlides={true} */
// 						pagination={{
// 							clickable: true,
// 						}}
// 						modules={[Pagination]}
// 						className="mySwiper"
// 					>
// 						<SwiperSlide>
// 							<img src={heroImg} alt="" />
// 						</SwiperSlide>
// 						<SwiperSlide>
// 							<img src={heroImg02} alt="" />
// 						</SwiperSlide>
// 						<SwiperSlide>
// 							<img src={heroimg03} alt="" />
// 						</SwiperSlide>
// 						{/* <SwiperSlide>Slide 4</SwiperSlide>
// 				<SwiperSlide>Slide 5</SwiperSlide>
// 				<SwiperSlide>Slide 6</SwiperSlide>
// 				<SwiperSlide>Slide 7</SwiperSlide>
// 				<SwiperSlide>Slide 8</SwiperSlide>
// 				<SwiperSlide>Slide 9</SwiperSlide> */}
// 					</Swiper>
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// };

// export default Events;
