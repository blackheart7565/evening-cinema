import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";

import "./styles/reset.css";
import "./assets/fonts-import.scss";
import "./styles/global.css";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<RootLayout />
		</BrowserRouter>
	</React.StrictMode>
);
