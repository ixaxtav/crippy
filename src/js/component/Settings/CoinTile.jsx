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

export default function CoinTile({ coinKey, topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				let coin = coinList[coinKey];

				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				}

				return (
					<TileClass>
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
