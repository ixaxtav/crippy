import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import Navbar from "../component/Navbar.jsx";
import { AppProvider } from "../store/AppProvider.js";
import Settings from "../component/Settings/SettingsPage.jsx";
import Content from "../component/Shared/Content.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container mt-5 text-white">
				<AppProvider>
					<Navbar />
					<Content>
						<Settings />
					</Content>
				</AppProvider>
			</div>
		);
	}
}
