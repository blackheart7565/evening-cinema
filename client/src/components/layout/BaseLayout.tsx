import React from "react";
import { Outlet } from "react-router-dom";

import { Main } from "../element/Main/Main";

interface IBaseLayoutProps { }

export const BaseLayout: React.FC<IBaseLayoutProps> = () => {
	return (
		<>
			{/* <Header /> */}
			<Main>
				<Outlet />
			</Main>
			{/* <Footer /> */}
		</>
	);
};