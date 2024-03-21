import classNames from "classnames";
import React, { useRef } from "react";

import { TStrokeWidth } from "../../../types/common.type";
import { setCircleProgress } from "../../../utils/common";

import "./CircleRating.scss";

interface ICircleRatingProps {
	value: number;
	size?: number | string;
	strokeWidth?: TStrokeWidth;
	isRound?: boolean | undefined;
}

export const CircleRating: React.FC<ICircleRatingProps> = ({
	value,
	size = 50,
	strokeWidth = 3.6,
	isRound,
}) => {
	const circleProgressRef = useRef<SVGCircleElement | null>(null);
	const {
		strokeDasharray,
		strokeDashoffset
	} = setCircleProgress(value, 20.2);

	return (
		<span
			className={classNames("circle-rating")}
			aria-valuenow={20}
			style={{
				width: size,
				height: size,
			}}
		>
			<svg
				className="circle-rating__svg"
				viewBox="22 22 44 44"
			>
				<circle
					className="circle-rating__circle"
					cx={44}
					cy={44}
					r={20.2}
					strokeWidth={strokeWidth}
					style={{
						strokeDasharray: `${strokeDasharray}`,
						strokeDashoffset: `${strokeDashoffset}px`,
					}}
				/>
				<circle
					className="circle-rating__progress"
					ref={circleProgressRef}
					cx={44}
					cy={44}
					r={20.2}
					strokeLinecap={isRound ? "round" : "square"}
					strokeWidth={strokeWidth}
					style={{
						strokeDasharray: `${strokeDasharray}`,
						strokeDashoffset: `${strokeDashoffset}px`,
					}}
				/>
			</svg>
		</span>
	);
};