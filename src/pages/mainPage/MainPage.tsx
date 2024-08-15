import { GradiantBox } from '@components/GradiantBox/GradiantBox';
import menuImg from './Vector.svg';
import styled from '@emotion/styled';
import { typo } from '@styles/typo';
import { palette } from '@styles/palette';
import Notice from '@components/notice/notice';
import { ReactNode } from 'react';
import WhiteBox from '@components/RentList/RentList';

export default function MainPage() {
	const DepartmentStyle = styled.p`
		${typo.I_Text_15_B};
		color: ${palette.white};

		margin: 0px;
		padding: 0px;

		position: absolute;
		top: 95px;
		left: 21px;
	`;
	const NameStyle = styled.p`
		${typo.I_Text_40_B};
		color: ${palette.white};

		margin: 0px;
		padding: 0px;

		position: absolute;
		top: 122px;
		left: 27px;
	`;
	return (
		<>
			<GradiantBox>
				<MenuButton />
				<DepartmentStyle>{'컴퓨터공학과 C1234567'}</DepartmentStyle>
				<NameStyle>{'홍와우'}</NameStyle>
				<Notice></Notice>
			</GradiantBox>
			<Container>
				<Subtitle
					X={6}
					Y={28}>
					{'대여 물품 목록'}
				</Subtitle>
				<WidthScroll
					X={47}
					Y={28}>
					<WhiteBox></WhiteBox>
					<WhiteBox></WhiteBox>
					<WhiteBox></WhiteBox>
					<WhiteBox></WhiteBox>
					<WhiteBox></WhiteBox>
				</WidthScroll>
			</Container>
		</>
	);
}
const MenuButton = () => {
	const MenuStyle = styled.button`
		width: 30px;
		height: 26.25px;
		flex-shrink: 0;

		margin: 0px;
		padding: 0px;

		border: none;
		background-color: transparent;

		position: absolute;
		top: 27px;
		left: 28px;
	`;
	return (
		<MenuStyle
			onClick={() => {
				console.log('on to menuPage');
			}}>
			<MenuImg />
		</MenuStyle>
	);
};
const MenuImg = () => {
	const MenuImgStyle = styled.img`
		background: transparent;
	`;
	return <MenuImgStyle src={menuImg}></MenuImgStyle>;
};
interface ContainerProps {
	children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
	const Style = styled.div`
		position: relative;
		margin: 0px;
		padding: 0px;
	`;
	return <Style>{children}</Style>;
};
interface Cordinate {
	X: number;
	Y: number;
}
const Subtitle = styled.p<Cordinate>`
	color: ${palette.dark_color};
	${typo.I_Text_25_B};

	margin: 0px;
	padding: 0px;

	position: absolute;
	top: ${(props) => props.X}px;
	left: ${(props) => props.Y}px;
`;
const WidthScroll = styled.div<Cordinate>`
	margin: 0px;
	padding: 0px;

	display: flex;
	flex-direction: row;
	justify-content: center;

	overflow-x: scroll;
	width: 390px;

	position: absolute;
	top: ${(props) => props.X}px;
	left: ${(props) => props.Y}px;
`;
