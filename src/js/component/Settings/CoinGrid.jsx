import React from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";
import CoinTile from "./CoinTile.jsx";
import { SelectableTile } from "../../component/Shared/Tile.jsx";
import CoinHeader from "./CoinHeader.jsx";
import CoinImg from "../../component/Shared/CoinImage.jsx";

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

function getCoinsToDisplay(coinList) {
	return Object.keys(coinList).slice(0, 100);
}

export default function CoinGrid() {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<CoinGridStyled>
					{getCoinsToDisplay(coinList).map(coinKey => (
						<SelectableTile key={coinKey}>
							<CoinHeader
								name={coinList[coinKey].CoinName}
								symbol={coinList[coinKey].Symbol}
							/>
							<CoinImg coin={coinList[coinKey]} />
						</SelectableTile>
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}
