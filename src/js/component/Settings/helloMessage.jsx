import React from "react";
import { AppContext } from "../../store/AppProvider.js";

export default function Welcome() {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) =>
				firstVisit ? (
					<div>
						Welcome to Crippy, please select your favorite coins to
						begin.{" "}
					</div>
				) : null
			}
		</AppContext.Consumer>
	);
}
