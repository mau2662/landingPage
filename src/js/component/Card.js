import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://www.rover.com/blog/wp-content/uploads/2014/10/tiny-pug1-750x540.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title text-center">Card title</h5>
				<p className="card-text">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More
				</a>
			</div>
		</div>
	);
};

export default Card;
