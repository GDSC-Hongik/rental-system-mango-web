import { css } from '@emotion/react';
import umbrellar from '@imgs/blue_umbrella.svg';
import battery from '@imgs/blue_battery.svg';
import styled from '@emotion/styled';
import { typo } from '@styles/typo';
import { palette } from '@styles/palette';
import { ReactNode } from 'react';
interface WhiteBoxProps {
	name: '우산' | '배터리';
	remain: number;
	total: number;
}

const WhiteBox = ({ name, remain, total }: WhiteBoxProps) => {
	const img = name === '우산' ? umbrellar : battery;

	return (
		<button
			css={css`
				width: 209px;
				height: 139px;
				background-color: #ffffff;
				border-radius: 20px;
				box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
				border: none;
				margin: 0px 14px 0px 0px;
				padding: 0px;

				flex: 0 0 209px;
				display: flex;
				align-items: center;
				justify-content: center;

				position: relative;
			`}>
			<Img src={img} />
			<Title>{name}</Title>
			<Text>{'잔여수량 ' + remain.toString() + '/' + total.toString()}</Text>
			<p
				css={css`
					${typo.I_Text_10_S};
					color: ${palette.bluegray_color};

					margin: 0px;
					padding: 0px;

					position: absolute;
					top: 107px;
					left: 144px;
				`}>
				{'바로가기 >'}
			</p>
		</button>
	);
};
const Img = (src: { src: string }) => {
	const Style = styled.img`
		position: absolute;
		top: 39px;
		left: 19px;
	`;
	return <Style src={src.src} />;
};
const Title = (node: { children: ReactNode }) => {
	const Style = styled.p`
		${typo.I_Text_25_B};
		color: ${palette.dark_color};

		margin: 0px;
		padding: 0px;

		position: absolute;
		top: 46px;
		left: 103px;
	`;
	return <Style>{node.children}</Style>;
};
const Text = (node: { children: ReactNode }) => {
	const Style = styled.p`
		${typo.I_Text_10_L};
		color: ${palette.dark_color};

		margin: 0px;
		padding: 0px;

		position: absolute;
		top: 82px;
		left: 103px;
	`;
	return <Style>{node.children}</Style>;
};

export default WhiteBox;
