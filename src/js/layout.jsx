import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import Navbar from "./component/Navbar.jsx";
import { AppProvider } from "./store/AppProvider.js";
import Settings from "./component/Settings/SettingsPage.jsx";
import DashboardPage from "./component/Dashboard/DashboardPage.jsx";
import Content from "./component/Shared/Content.jsx";

import { Footer } from "./component/footer.jsx";

//create your first component
export default class Layout extends React.Component {
	render() {
		return (
			<div className="container mt-5 text-white">
				<AppProvider>
					<Navbar />
					<Content>
						<Settings />
						<DashboardPage />
					</Content>
				</AppProvider>
			</div>
		);
	}
}
