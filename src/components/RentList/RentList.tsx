import React from 'react';
import { css } from '@emotion/react';

interface WhiteBoxProps {
	width?: string;
	height?: string;
}

const WhiteBox: React.FC<WhiteBoxProps> = ({
	width = '209px',
	height = '139px',
}) => {
	return (
		<div
			css={css`
				width: ${width};
				height: ${height};
				background-color: #ffffff;
				border-radius: 20px;
				box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

				margin: 0px 14px 0px 0px;
				padding: 0px;

				display: inline-block;
			`}
		/>
	);
};

export default WhiteBox;
