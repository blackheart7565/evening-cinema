import React from "react";
import { Routes, useLocation } from "react-router-dom";

import { displayRoutes } from "../../utils/common";
import { layoutPaths } from "../../utils/layoutPaths";

interface IRootLayoutProps { }

export const RootLayout: React.FC<IRootLayoutProps> = () => {
	const location = useLocation();

	return (
		<Routes location={location} key={location.pathname}>
			{displayRoutes(layoutPaths)}
		</Routes>
	);
};