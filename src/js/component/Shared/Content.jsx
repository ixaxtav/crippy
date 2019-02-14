import React from "react";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";

export default function Content(props) {
	return (
		<AppContext.Consumer>
			{({ coinList, prices, firstVisit }) => {
				if (!coinList) {
					return <div> Loading Coins </div>;
				}
				if (!firstVisit && !prices) {
					return <div> Loading Prices </div>;
				}
				return <div> {props.children} </div>;
			}}
		</AppContext.Consumer>
	);
}

Content.propTypes = {
	children: PropTypes.array
};
