import React from "react";

const News = () => {
	return (
		<div>
			<h1
				style={{
					marginBlock: "60px",
					textAlign: "center",
					marginBlockStart: "30px",
				}}
			>
				Noticias de San Pedro Colalao
			</h1>
			<iframe
				style={{ width: "100%", height: "100vh" }}
				src="https://www.lagaceta.com.ar/tags/2549/san-pedro-colalao"
			></iframe>
		</div>
	);
};

export default News;
