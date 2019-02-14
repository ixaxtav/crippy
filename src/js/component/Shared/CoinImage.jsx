import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const CoinImage = styled.img`
	height: 50px;
	${props =>
		props.spotlight &&
		css`
			height: 200px;
			margin: auto;
			display: block;
		`};
`;

export default function CoinImg({ coin, spotlight }) {
	return (
		<CoinImage
			spotlight={spotlight}
			alt={coin.CoinSymbol}
			src={`http://cryptocompare.com/${coin.ImageUrl}`}
		/>
	);
}

CoinImg.propTypes = {
	coin: PropTypes.object,
	spotlight: PropTypes.bool
};
