import React from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";
import {
	SelectableTile,
	DisabledTile,
	DeletableTile
} from "../../component/Shared/Tile.jsx";
import CoinHeader from "./CoinHeader.jsx";
import CoinImg from "../../component/Shared/CoinImage.jsx";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
	return topSection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
}

export default function CoinTile({ coinKey, topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList, addCoin, removeCoin, isInFavorites }) => {
				let coin = coinList[coinKey];

				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				} else if (isInFavorites(coinKey)) {
					TileClass = DisabledTile;
				}

				return (
					<TileClass
						onClick={clickCoinHandler(
							topSection,
							coinKey,
							addCoin,
							removeCoin
						)}>
						<CoinHeader
							topSection={topSection}
							name={coin.CoinName}
							symbol={coin.Symbol}
						/>

						<CoinImg coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
}

CoinTile.propTypes = {
	coinKey: PropTypes.string,
	topSection: PropTypes.bool
};
