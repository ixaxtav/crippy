import React from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
`;

export default function CoinGrid() {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<CoinGridStyled>
					{Object.keys(coinList).map(coinKey => (
						<div key> {coinKey} </div>
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}
