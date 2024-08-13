import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import blue_umbrella from '@imgs/blue_umbrella.svg';
import white_umbrella from '@imgs/white_umbrella.svg';
import { typo } from '@styles/typo';

// export interface ButtonProps {
// 	Status: RentStatus;
// 	Stuff: Stuff;
// 	Rating: Rating;
// }
export interface Stuff {
	Name: string;
	Id: number;
}
export interface RentStatus {
	Status: 'wait' | 'rent';
}
export interface Rating {
	Rating: number;
}

const RentButtonStyle = styled.button<RentStatus>`
	display: flex;
	flex-direction: row;
	width: 336px;
	height: 83px;
	border: none;
	box-sizing: border-box;

	padding: 0px 0px;

	position: relative;

	border-radius: 20px;
	background: ${(props) => getBackground(props)};
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

	margin: 0px;
	padding: 0px;

	position: absolute;
	top: 23px;
	left: 83px;
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
				position: absolute;
				top: 18px;
				left: 15px;
			`}
			src={img}></img>
	);
};

const RatingComponent = ({ Rating, Status }: Rating & RentStatus) => {
	const color = Status === 'wait' ? palette.dark_color : palette.white;
	return (
		<p
			css={css`
				color: ${color};
				${typo.I_Text_10_L};
				margin: 0px;
				padding: 0px;

				position: absolute;
				top: 50px;
				left: 83px;
			`}>
			{'별점: ' + String(Rating)}
		</p>
	);
};

const Guide = ({ Status }: RentStatus) => {
	const color = Status === 'wait' ? palette.blue : palette.red;
	const content = Status === 'wait' ? '예약하기 >' : '대여중..';

	return (
		<p
			css={css`
				${typo.I_Text_13_S};
				color: ${color};

				margin: 0px;
				padding: 0px;

				position: absolute;
				top: 34px;
				right: 15px;
			`}>
			{content}
		</p>
	);
};

function RentButton({ Status, Name, Id, Rating }: RentStatus & Stuff & Rating) {
	const onClick = () => {
		if (Status === 'wait') {
			WaitStatus();
		} else {
			RentStatus();
		}
	};

	return (
		<RentButtonStyle
			Status={Status}
			onClick={onClick}>
			<StuffImg Status={Status} />
			<Title
				Name={Name}
				Id={Id}
				Status={Status}
			/>
			<RatingComponent
				Rating={Rating}
				Status={Status}
			/>
			<Guide Status={Status} />
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
