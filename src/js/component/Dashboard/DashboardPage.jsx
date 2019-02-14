import React from "react";
import styled from "styled-components";
import Page from "../../component/Shared/Page.jsx";
import PriceGrid from "./PriceGrid.jsx";
import CoinSpotlight from "./CoinSpotlight.jsx";
import PriceChart from "./PriceChart.jsx";

const ChartGrid = styled.div`
	display: grid;
	margin-top: 20px;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
`;

export default function DashboardPage() {
	return (
		<Page name="dashboard">
			<PriceGrid />
			<ChartGrid>
				<CoinSpotlight />
				<PriceChart />
			</ChartGrid>
		</Page>
	);
}
