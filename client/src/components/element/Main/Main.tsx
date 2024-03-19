import React, { HTMLAttributes } from "react";

import "./Main.scss";

interface IMainProps extends HTMLAttributes<HTMLElement> { }

export const Main: React.FC<IMainProps> = ({
	children
}) => {
	return (
		<main className="main">
			{children}
		</main>
	);
};