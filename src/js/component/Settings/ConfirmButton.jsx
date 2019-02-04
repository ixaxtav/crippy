import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../../store/AppProvider.js";

const ButtonStyled = styled.div`
	margin: 20px;
	color: green;
	cursor: pointer;
`;

export const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

export default function ConfirmButton() {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<ButtonStyled onClick={confirmFavorites}>
					Confirm Favorites
				</ButtonStyled>
			)}
		</AppContext.Consumer>
	);
}
