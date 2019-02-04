import React from "react";
import PropTypes from "prop-types";
import cc from "cryptocompare";
import "babel-polyfill";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "dashboard",
			...this.savedSettings(),
			setpage: this.setPage,
			confirmFavorites: this.confirmFavorites
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
	};

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	};

	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: "dashboard"
		});
		localStorage.setItem(
			"Crippy",
			JSON.stringify({
				text: "hello"
			})
		);
	};

	savedSettings() {
		let crippyData = JSON.parse(localStorage.getItem("Crippy"));
		if (!crippyData) {
			return { page: "settings", firstVisit: true };
		}
		return {};
	}

	setPage = page => this.setState({ page });

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

AppProvider.propTypes = {
	children: PropTypes.array
};
