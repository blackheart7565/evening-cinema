import { BaseLayout } from "../components/layout/BaseLayout";
import { Home } from "../components/pages/Home/Home";
import { ILayoutPaths } from "../types/constants.type";
import { endpoints } from "./constants";

export const layoutPaths: ILayoutPaths[] = [
	{
		id: 1,
		path: endpoints.home,
		element: <BaseLayout />,
		children: [
			{
				id: 1,
				index: true,
				path: "",
				element: <Home />
			},
		]
	}
];
