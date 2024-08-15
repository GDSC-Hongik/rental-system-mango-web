import { css } from '@emotion/react';

export const calcRem = (px: number) => `${(px / 16).toFixed(2)}rem`;

export const typo = {
	//로그인 화면
	M_Text_20_R: css`
		font-family: 'Manjari', sans-serif;
		font-size: ${calcRem(20)};
		line-height: 150%;
		font-weight: 400;
	`,
	L_Text_60_R: css`
		font-family: 'Lily Script One', cursive;
		font-size: ${calcRem(60)};
		line-height: 150%;
		font-weight: 400;
	`,
	I_Text_10_M: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(10)};
		line-height: 150%;
		font-weight: 500;
	`,
	I_Text_20_L: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(20)};
		line-height: 150%;
		font-weight: 300;
	`,
	I_Text_12_L: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(12)};
		line-height: 150%;
		font-weight: 300;
	`,
	//메뉴
	I_Text_15_B: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(15)};
		line-height: 150%;
		font-weight: 700;
	`,
	I_Text_40_B: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(40)};
		line-height: 150%;
		font-weight: 700;
	`,
	I_Text_17_R: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(17)};
		line-height: 150%;
		font-weight: 400;
	`,
	//비회원
	I_Text_25_B: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(25)};
		line-height: 150%;
		font-weight: 700;
	`,
	I_Text_10_L: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(10)};
		line-height: 150%;
		font-weight: 300;
	`,
	I_Text_10_S: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(10)};
		line-height: 150%;
		font-weight: 600;
	`,
	I_Text_13_L: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(13)};
		line-height: 150%;
		font-weight: 300;
	`,
	I_Text_20_B: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(20)};
		line-height: 150%;
		font-weight: 700;
	`,
	//회원 정보 수정
	P_Text_12_R: css`
		font-family: 'Poppins', sans-serif;
		font-size: ${calcRem(12)};
		line-height: 150%;
		font-weight: 400;
	`,
	//대여 신청
	I_Text_13_S: css`
		font-family: 'Inter', sans-serif;
		font-size: ${calcRem(13)};
		line-height: 150%;
		font-weight: 600;
	`,
	//예약 완료 팝업
	//메인
} as const;
