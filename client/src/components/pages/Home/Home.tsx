import React from "react";

import { Hero } from "./Hero";

import "./Home.scss";

interface IHomeProps { }

export const Home: React.FC<IHomeProps> = () => {
	return (
		<div
			className="home"
		>
			<Hero />
		</div>
	);
};