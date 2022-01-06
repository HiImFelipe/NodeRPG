import { Box } from "ink";
import React, { FC } from "react";

interface IProps {
	children: any;
	[key: string]: any;
}

const Column: FC<IProps> = ({ children, ...props }) => {
	return (
		<Box flexDirection="column" {...props}>
			{children}
		</Box>
	);
};

export default Column;
