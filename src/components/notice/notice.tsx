import React from 'react';
import { css } from '@emotion/react';
import { palette } from '../../styles/palette';
import { typo } from '../../styles/typo';

const Notice: React.FC = () => {
	return (
		<div
			css={css`
				background-color: rgba(255, 255, 255, 0.6); /* #FFFFFF 60% */
				padding: 20px;
				border-radius: 20px;
				text-align: center;
				color: ${palette.dark_color};
				width: 336px;
				height: 99px;
			`}>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 10px;
					margin-bottom: 20px;
					margin-top: 5px;
					${typo.I_Text_15_B};
				`}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='21.38'
					height='19'
					fill='none'>
					<path
						fill='#362B48'
						d='M21.375 8.906c0-.877-.48-1.634-1.188-2.045V1.188C20.188.863 19.928 0 19 0c-.264 0-.527.088-.741.26l-3.156 2.525A9.007 9.007 0 0 1 9.5 4.75H2.375A2.375 2.375 0 0 0 0 7.125v3.563a2.375 2.375 0 0 0 2.375 2.374h1.25c-.051.39-.08.785-.08 1.188a9.4 9.4 0 0 0 .948 4.117c.193.397.613.633 1.054.633h2.757c.966 0 1.547-1.107.96-1.876a4.726 4.726 0 0 1-.97-2.874c0-.412.06-.809.164-1.188H9.5c2.028 0 4.018.699 5.603 1.965l3.155 2.525c.21.168.472.26.742.26.924 0 1.187-.845 1.187-1.187v-5.673a2.365 2.365 0 0 0 1.188-2.046Zm-3.563 5.248-1.226-.98A11.385 11.385 0 0 0 9.5 10.687V7.124c2.565 0 5.082-.882 7.086-2.486l1.227-.98v10.495Z'
					/>
				</svg>
				<span> 학생회실운영시간-11:00~17:00</span>
			</div>
			<div
				css={css`
					${typo.I_Text_15_B};
				`}>
				반납-익일~17:00
			</div>
			<div
				css={css`
					${typo.I_Text_15_B};
					margin-bottom: 5px;
				`}>
				(금요일은 당일 17시까지 반납 해주세요!)
			</div>
		</div>
	);
};

export default Notice;
