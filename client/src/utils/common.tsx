import { Route } from "react-router-dom";
import { ILayoutPaths } from "../types/constants.type";

export const displayRoutes = (routers: ILayoutPaths[]) => {
	return (
		<>
			{routers.map(({ id, path, element, children }: ILayoutPaths) => (
				<Route
					key={id}
					element={element}
					path={path}
				>
					{children
						&& children.length > 0
						&& displayRoutes(children)}
				</Route>
			))}
		</>
	);
};
