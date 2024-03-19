import React from "react";

import "./Header.scss";

interface IHeaderProps { }

export const Header: React.FC<IHeaderProps> = () => {
	return (
		<header
			className="header"
		>
			Header
		</header>
	);
};