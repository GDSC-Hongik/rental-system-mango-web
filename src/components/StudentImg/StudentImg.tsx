import { css } from '@emotion/react';

interface props {
	img: string;
	size: 'small' | 'big';
}
export const StudentImg = ({ img, size }: props) => {
	const scale = size === 'small' ? '75px' : '159px';
	return (
		<div
			css={css`
				width: ${scale};
				height: ${scale};
				border-radius: 70%;
				overflow: hidden;
			`}>
			<img
				src={img}
				css={css`
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			/>
		</div>
	);
};
