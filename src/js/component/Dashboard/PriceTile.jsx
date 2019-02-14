import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile.jsx";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles.jsx";
import { CoinHeaderGridStyled } from "../Settings/CoinHeader.jsx";
import { AppContext } from "../../store/AppProvider.js";
import PropTypes from "prop-types";

const JustifyRight = styled.div`
	justify-self: right;
`;

const JustifyLeft = styled.div`
	justify-self: left;
`;

const TickerPrice = styled.div`
	${fontSizeBig};
`;

const ChangePct = styled.div`
	color: green;
	${props =>
		props.red &&
		css`
			color: red;
		`};
`;

const numberFormat = number => {
	return +(number + "").slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`
	${props =>
		props.compact &&
		css`
			display: grid;
			${fontSize3} grid-gap: 5px;
			grid-template-columns: repeat(3, 1fr);
			justify-items: right;
		`} ${props =>
		props.currentFavorite &&
		css`
			${greenBoxShadow} pointer-events: none;
		`};
`;

function ChangePercent({ data }) {
	return (
		<JustifyRight>
			<ChangePct red={data.CHANGEPCT24HOUR < 0}>
				{numberFormat(data.CHANGEPCT24HOUR)}%
			</ChangePct>
		</JustifyRight>
	);
}

function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
	return (
		<PriceTileStyled
			onClick={setCurrentFavorite}
			currentFavorite={currentFavorite}>
			<CoinHeaderGridStyled>
				<div> {sym} </div>
				<ChangePercent data={data} />
			</CoinHeaderGridStyled>
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyled>
	);
}

function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
	return (
		<PriceTileStyled
			onClick={setCurrentFavorite}
			compact
			currentFavorite={currentFavorite}>
			<JustifyLeft> {sym} </JustifyLeft>
			<ChangePercent data={data} />
			<div>${numberFormat(data.PRICE)}</div>
		</PriceTileStyled>
	);
}

export default function PriceTiles({ price, index }) {
	let sym = Object.keys(price)[0];
	let data = price[sym]["USD"];
	let TileClass = index < 5 ? PriceTile : PriceTileCompact;
	return (
		<AppContext.Consumer>
			{({ currentFavorite, setCurrentFavorite }) => (
				<TileClass
					sym={sym}
					data={data}
					currentFavorite={currentFavorite === sym}
					setCurrentFavorite={() => setCurrentFavorite(sym)}
				/>
			)}
		</AppContext.Consumer>
	);
}

PriceTiles.propTypes = {
	price: PropTypes.object,
	index: PropTypes.number
};

PriceTileCompact.propTypes = {
	sym: PropTypes.string,
	data: PropTypes.object,
	currentFavorite: PropTypes.bool,
	setCurrentFavorite: PropTypes.func
};
PriceTile.propTypes = {
	sym: PropTypes.string,
	data: PropTypes.object,
	currentFavorite: PropTypes.bool,
	setCurrentFavorite: PropTypes.func
};
ChangePercent.propTypes = {
	data: PropTypes.object
};
