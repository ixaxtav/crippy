import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../../store/AppProvider.js";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles.jsx";

const ButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1} 
  padding: 5px;
  cursor: pointer; 
  &:hover {
    ${greenBoxShadow} 
  }
`;

export const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

export default function ConfirmButton() {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<ButtonStyled onClick={confirmFavorites}>
						Confirm Favorites
					</ButtonStyled>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
}
