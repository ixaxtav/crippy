import React from "react";
import Welcome from "./helloMessage.jsx";
import ConfirmButton from "./ConfirmButton.jsx";
import Page from "../../component/Shared/Page.jsx";

export default function SettingsPage() {
	return (
		<Page name="settings">
			<Welcome />
			<ConfirmButton />
		</Page>
	);
}
