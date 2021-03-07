import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar> </Navbar>
			<div className="Container">
				<Jumbotron> </Jumbotron>
				<div className="row">
					<div className="col">
						<Card> </Card>
					</div>
					<div className="col">
						<Card> </Card>
					</div>
					<div className="col">
						<Card> </Card>
					</div>
					<div className="col">
						<Card> </Card>
					</div>
				</div>
			</div>

			<Footer> </Footer>
		</div>
	);
}
