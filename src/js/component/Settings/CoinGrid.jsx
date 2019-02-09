import React from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";
import CoinTile from "./CoinTile.jsx";
import {
	SelectableTile,
	DisabledTile,
	DeletableTile
} from "../../component/Shared/Tile.jsx";

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

function getCoinsToDisplay(coinList, topSection, favorites) {
	return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}

export default function CoinGrid({ topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites }) => (
				<CoinGridStyled>
					{getCoinsToDisplay(coinList, topSection, favorites).map(
						coinKey => (
							<CoinTile
								key={coinKey}
								topSection={topSection}
								coinKey={coinKey}
							/>
						)
					)}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}

CoinGrid.propTypes = {
	topSection: PropTypes.bool
};
