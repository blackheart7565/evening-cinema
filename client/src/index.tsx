import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootLayout } from "./components/layout/RootLayout";

import "./styles/reset.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RootLayout />
	</React.StrictMode>
);
