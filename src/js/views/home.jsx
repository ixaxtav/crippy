import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<h1>Welcome to Crippy !</h1>
			</div>
		);
	}
}
