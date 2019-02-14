import highchartsConfig from "./HighchartsConfig.jsx";
import React from "react";
import { Tile } from "../../component/Shared/Tile.jsx";
import { AppContext } from "../../store/AppProvider.js";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme.jsx";
import ChartSelect from "./ChartSelect.jsx";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function PriceCharts() {
	return (
		<AppContext.Consumer>
			{({ historical, changeChartSelect }) => (
				<Tile>
					<ChartSelect
						defaultValue="months"
						onChange={e => changeChartSelect(e.target.value)}>
						<option value="days"> Days </option>
						<option value="weeks"> Weeks </option>
						<option value="months"> Months </option>
					</ChartSelect>
					{historical ? (
						<ReactHighcharts
							config={highchartsConfig(historical)}
						/>
					) : (
						<div> Loading Historical Data </div>
					)}
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
