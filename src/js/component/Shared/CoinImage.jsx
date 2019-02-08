import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export default function CoinImg({ coin, style }) {
	return (
		<img
			alt={coin.CoinSymbol}
			style={style || { height: "50px" }}
			src={`http://cryptocompare.com/${coin.ImageUrl}`}
		/>
	);
}

CoinImg.propTypes = {
	coin: PropTypes.object,
	style: PropTypes.string
};
