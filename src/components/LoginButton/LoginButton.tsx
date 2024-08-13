import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { typo } from '@styles/typo';

interface props {
	onClick: () => void;
}

export const LoginButton = ({ onClick }: props) => {
	return (
		<button
			css={css`
				width: 271px;
				height: 47px;
				flex-shrink: 0;

				border-radius: 30px;
				background: ${palette.white};
				border: none;

				margin: 0px;
				padding: 0px;
			`}
			onClick={onClick}>
			<p
				css={css`
					color: ${palette.main_color};
					${typo.I_Text_20_L};
					text-align: center;

					margin: 0px;
					padding: 0px;
				`}>
				Login
			</p>
		</button>
	);
};
