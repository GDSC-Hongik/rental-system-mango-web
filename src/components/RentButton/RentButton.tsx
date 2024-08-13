import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { ButtonHTMLAttributes } from 'react';
import blue_umbrella from '@imgs/blue_umbrella.svg';
import white_umbrella from '@imgs/white_umbrella.svg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	Status: RentStatus;
	Stuff: Stuff;
}
export interface Stuff {
	Name: string;
	Id: number;
}
export interface RentStatus {
	Status: 'wait' | 'rent';
}

const RentButtonStyle = styled.button<ButtonProps>`
	display: flex;
	flex-direction: row;
	width: 336px;
	height: 83px;
	border: none;
	box-sizing: border-box;

	padding: 0px 0px;

	border-radius: 20px;
	background: ${(props) => getBackground(props.Status)};
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const getBackground = ({ Status }: RentStatus) => {
	if (Status === 'wait') {
		return palette.white;
	} else {
		return palette.bluegray_color;
	}
};

const TitleStyle = styled.p<RentStatus>`
	flex-shrink: 0;

	color: ${(props) => getTextColor(props)};
	text-align: center;
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;

	margin: 0px 0px;

	position: relative;
	top: 23px;
	left: 27px;
`;
const getTextColor = ({ Status }: RentStatus) => {
	if (Status === 'wait') {
		return palette.black;
	} else {
		return palette.white;
	}
};

const Title = ({ Name, Id, Status }: Stuff & RentStatus) => {
	return <TitleStyle Status={Status}>{Name + String(Id)}</TitleStyle>;
};

const StuffImg = ({ Status }: RentStatus) => {
	const img = Status === 'wait' ? blue_umbrella : white_umbrella;
	return (
		<img
			css={css`
				position: relative;
				top: 18px;
				left: 15px;
			`}
			src={img}></img>
	);
};

function RentButton({ Status, Stuff }: ButtonProps) {
	const onClick = () => {
		if (Status.Status === 'wait') {
			WaitStatus();
		} else {
			RentStatus();
		}
	};

	return (
		<RentButtonStyle
			Status={Status}
			Stuff={Stuff}
			onClick={onClick}>
			<StuffImg Status={Status.Status} />
			<Title
				Name={Stuff.Name}
				Id={Stuff.Id}
				Status={Status.Status}></Title>
		</RentButtonStyle>
	);
}

export { RentButton };

const WaitStatus = () => {
	console.log("It's waiting");
};
const RentStatus = () => {
	console.log("It's Renting");
};
