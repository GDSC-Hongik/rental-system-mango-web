import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { ReactNode } from 'react';

interface children {
	children: ReactNode;
}

export const GradiantBox = ({ children }: children) => {
	return (
		<div
			css={css`
				width: 390px;
				height: 362px;
				flex-shrink: 0;
				position: releative;

				background: ${palette.gradient.main_linear_1};
			`}>
			{children}
		</div>
	);
};
