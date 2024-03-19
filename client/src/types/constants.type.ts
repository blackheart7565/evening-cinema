export interface ILayoutPaths {
	id: number;
	index?: boolean | undefined;
	path: string;
	element: React.ReactNode;
	children?: ILayoutPaths[] | undefined;
}