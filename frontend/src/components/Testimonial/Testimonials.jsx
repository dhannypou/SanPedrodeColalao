import React from "react";
import Safe from "react-safe";

const Testimonials = () => {
	return (
		<>
			<div id="disqus_thread"></div>
			<Safe.script>
				{(function () {
					// DON'T EDIT BELOW THIS LINE
					var d = document,
						s = d.createElement("script");
					s.src = "https://san-pedro-de-colalao.disqus.com/embed.js";
					s.setAttribute("data-timestamp", +new Date());
					(d.head || d.body).appendChild(s);
				})()}
			</Safe.script>
		</>
	);
};

export default Testimonials;

/* import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		swipeToSlide: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
					explicabo provident hic distinctio molestias voluptates nobis alias
					placeat suscipt earum debitits recusandae voluptate illum expedita
					corrupti aliquid doloribus delectus?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava01} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h6 className="mb-0 mt-3">Marcos Rodriguez</h6>
						<p>Cliente</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
					explicabo provident hic distinctio molestias voluptates nobis alias
					placeat suscipt earum debitits recusandae voluptate illum expedita
					corrupti aliquid doloribus delectus?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava02} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h6 className="mb-0 mt-3">Ana Garcia</h6>
						<p>Cliente</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
					explicabo provident hic distinctio molestias voluptates nobis alias
					placeat suscipt earum debitits recusandae voluptate illum expedita
					corrupti aliquid doloribus delectus?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava03} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h6 className="mb-0 mt-3">Jose Marquez</h6>
						<p>Cliente</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
					explicabo provident hic distinctio molestias voluptates nobis alias
					placeat suscipt earum debitits recusandae voluptate illum expedita
					corrupti aliquid doloribus delectus?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava03} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h6 className="mb-0 mt-3">Juan Castro</h6>
						<p>Cliente</p>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export default Testimonials;
 */
