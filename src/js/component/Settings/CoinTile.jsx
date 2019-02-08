import React from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";
import { SelectableTile } from "../../component/Shared/Tile.jsx";

export default function CoinTile({ coinKey }) {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				let coin = coinList[coinKey];

				const TileClass = SelectableTile;
				return <TileClass>{coin.Name}</TileClass>;
			}}
		</AppContext.Consumer>
	);
}

CoinTile.propTypes = {
	coinKey: PropTypes.object
};
