import React from "react";
import "./Facebook.css";

const Facebook = () => {
	return (
		<div className="facebook">
			<iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091955539406&tabs=timeline&width=1000&height=700&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=788244315655655"
				width="1000"
				height="700"
				scrolling="no"
				/* style="border:none;overflow:hidden"
				frameborder="0"
				allowfullscreen="true"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" */
			></iframe>
		</div>
	);
};

export default Facebook;
