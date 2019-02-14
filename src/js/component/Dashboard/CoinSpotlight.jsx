import React from "react";
import styled from "styled-components";
import { Tile } from "../../component/Shared/Tile.jsx";
import { AppContext } from "../../store/AppProvider.js";
import CoinImage from "../../component/Shared/CoinImage.jsx";

const SpotlightName = styled.h2`
	text-align: center;
`;

export default function CoinSpotlight() {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinList }) => (
				<Tile>
					<SpotlightName>
						{" "}
						{coinList[currentFavorite].CoinName}{" "}
					</SpotlightName>
					<CoinImage spotlight coin={coinList[currentFavorite]} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
