import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const CoinHeaderGridStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
	justify-self: right;
`;

export default function CoinHeader({ name, symbol }) {
	return (
		<CoinHeaderGridStyled>
			<div> {name} </div>
			<CoinSymbol>{symbol}</CoinSymbol>
		</CoinHeaderGridStyled>
	);
}

CoinHeader.propTypes = {
	name: PropTypes.string,
	symbol: PropTypes.string
};
