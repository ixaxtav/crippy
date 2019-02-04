import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../store/AppProvider.js";

const Logo = styled.div`
	font-size: 1.5em;
`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
	cursor: pointer;
	${props =>
		props.active &&
		css`
			text-shadow: 2px 2px #137f13;
		`};
`;

function toProperCase(lower) {
	return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name }) {
	return (
		<AppContext.Consumer>
			{({ page }) => (
				<ControlButtonElem active={page === name}>
					{toProperCase(name)}
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	);
}

export default function Navbar() {
	return (
		<Bar>
			<Logo>Crippy</Logo>
			<div />
			<ControlButton active name="dashboard" />
			<ControlButton name="settings" />
		</Bar>
	);
}

toProperCase.propTypes = {
	lower: PropTypes.string
};

ControlButton.propTypes = {
	name: PropTypes.string,
	active: PropTypes.bool
};
