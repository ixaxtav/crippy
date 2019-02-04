import React from "react";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";

export default function Page({ name, children }) {
	return (
		<AppContext.Consumer>
			{({ page }) => {
				if (page !== name) {
					return null;
				}
				return <div> {children} </div>;
			}}
		</AppContext.Consumer>
	);
}

Page.propTypes = {
	children: PropTypes.array,
	name: PropTypes.string
};
