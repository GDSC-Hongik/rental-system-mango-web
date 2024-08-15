import { GradiantBox } from '@components/GradiantBox/GradiantBox';
import menuImg from './Vector.svg';
import styled from '@emotion/styled';
import { typo } from '@styles/typo';
import { palette } from '@styles/palette';
import Notice from '@components/notice/notice';
import { ReactNode } from 'react';
import WhiteBox from '@components/RentList/RentList';
import RentStatusButton from '@components/RentStatus/RentStatus';

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
			<Container>
				<GradiantBox>
					<MenuButton />
					<DepartmentStyle>{'컴퓨터공학과 C1234567'}</DepartmentStyle>
					<NameStyle>{'홍와우'}</NameStyle>
					<Notice></Notice>
				</GradiantBox>
				<Container>
					<Subtitle
						X={28}
						Y={6}>
						{'대여 물품 목록'}
					</Subtitle>
					<WidthScroll
						X={28}
						Y={47}>
						<WhiteBox
							name='우산'
							remain={4}
							total={10}></WhiteBox>
						<WhiteBox
							name='배터리'
							remain={5}
							total={100}></WhiteBox>
						<WhiteBox
							name='배터리'
							remain={3}
							total={20}></WhiteBox>
					</WidthScroll>
				</Container>
				<Container>
					<Subtitle
						X={28}
						Y={235}>
						{`반납 예정 물품(3)`}
					</Subtitle>
					<RentStatusButton
						status='overdue'
						itemName='우산'
						startDate='2024-8-16'
						dueDate='2024-8-18'
						x={27}
						y={276}></RentStatusButton>
				</Container>
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
		background-color: ${palette.background_color};
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
	top: ${(props) => props.Y}px;
	left: ${(props) => props.X}px;
`;
const WidthScroll = styled.div<Cordinate>`
	margin: 0px;
	padding: 0px;

	width: 390px;
	display: flex; /* 가로로 정렬 */
	overflow-x: auto; /* 가로 스크롤 가능 */
	white-space: nowrap; /* 줄바꿈 방지 */

	position: absolute;
	top: ${(props) => props.Y}px;
	left: ${(props) => props.X}px;
`;
