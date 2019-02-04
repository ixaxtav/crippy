import React from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";
import { SelectableTile } from "../../component/Shared/Tile.jsx";

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
	grid-gap: 15px;
`;

export default function CoinGrid() {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<CoinGridStyled>
					{Object.keys(coinList).map(coinKey => (
						<SelectableTile key={coinKey}>
							{" "}
							{coinKey}{" "}
						</SelectableTile>
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}
