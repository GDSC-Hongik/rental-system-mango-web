import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { LoginAPI } from '../../apis/LoginApi';
import {
	parseJwt,
	AuthVerify,
	accessToken,
	refreshToken,
} from '../../apis/utils/token';
import { palette } from '../../styles/palette';
import { typo } from '../../styles/typo';
import { LoginButton } from '@components/LoginButton/LoginButton';

import polygon1 from './Polygon_1.svg';
import rectangle63 from './Rectangle_63.svg';
import kakao from './kakao.svg';

const LoginPage = () => {
	const [studentId, setStudentId] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			await LoginAPI({ studentId, password });

			const accessToken = localStorage.getItem('accessToken');
			const refreshToken = localStorage.getItem('refreshToken');

			if (!accessToken || !refreshToken) {
				setErrorMessage('토큰을 가져오지 못했습니다.');
				return;
			}

			const parsedAccessToken = parseJwt(accessToken) as accessToken;
			const parsedRefreshToken = parseJwt(refreshToken) as refreshToken;

			if (
				AuthVerify({
					accessToken: parsedAccessToken,
					refreshToken: parsedRefreshToken,
				}) === 'success'
			) {
				navigate('/main-page'); // 로그인 성공 시 메인 페이지로 이동
			} else {
				setErrorMessage('회원 정보가 일치하지 않습니다');
			}
		} catch (error) {
			setErrorMessage('회원 정보가 일치하지 않습니다');
		}
	};

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				width: 390px;
				height: 844px;
				margin: 0 auto;
				background: ${palette.white};
				overflow: hidden;
				position: relative;
			`}>
			{/* 큰 원형 배경 요소 (Rectangle_63) */}
			<img
				src={rectangle63}
				alt='Background Shape'
				style={{
					position: 'absolute',
					top: 0,
					left: '-88.2px',
					zIndex: 1,
					width: '478.5px',
					height: '745px',
				}}
			/>

			{/* 작은 원형 배경 요소 (Polygon_1) */}
			<img
				src={polygon1}
				alt='Background Shape'
				style={{
					position: 'absolute',
					top: '688px',
					bottom: '0.25px',
					right: '191px',
					zIndex: 1,
					width: '199px',
					height: '156px',
				}}
			/>

			{/* 텍스트 및 로그인 폼 */}
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					width: 100%;
					padding: 0 50px;
					box-sizing: border-box;
					z-index: 2;
				`}>
				{}
				<p
					css={css`
						${typo.M_Text_20_R};
						color: ${palette.white};
						margin-top: 150px;
						margin-bottom: 5px;
						line-height: 1;
					`}>
					물품 대여 서비스, 와우대여
				</p>
				<h1
					css={css`
						${typo.L_Text_60_R};
						color: ${palette.white};
						margin-top: 5px;
						margin-bottom: 40px;
						line-height: 1;
					`}>
					Sign in
				</h1>

				{}
				<div
					css={css`
						width: 90%;
						display: flex;
						flex-direction: column;
						align-items: center;
						z-index: 2;
					`}>
					<input
						type='text'
						placeholder='Student ID'
						value={studentId}
						onChange={(e) => {
							setStudentId(e.target.value);
						}}
						css={css`
							${typo.I_Text_20_L};
							width: 263px;
							border: none;
							border-bottom: 1px solid ${palette.white};
							background: transparent;
							color: ${palette.white};
							margin-bottom: 30px;
							&::placeholder {
								color: ${palette.white};
							}
						`}
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						css={css`
							${typo.I_Text_20_L};
							width: 263px;
							border: none;
							border-bottom: 1px solid ${palette.white};
							background: transparent;
							color: ${palette.white};
							margin-bottom: 25px;
							&::placeholder {
								color: ${palette.white};
							}
						`}
					/>

					{!errorMessage ? (
						<div
							css={css`
								height: 12px;
								margin-bottom: 25px;
							`}
						/>
					) : (
						<p
							css={css`
								color: ${palette.red};
								${typo.I_Text_10_M};
								width: 125px;
								height: 12px;
								margin-top: 0px;
								margin-bottom: 25px;
								text-align: center;
								white-space: nowrap;
							`}>
							{errorMessage}
						</p>
					)}

					<LoginButton
						onClick={() => {
							handleLogin().catch((err: unknown) => {
								console.error('Login error:', err);
							});
						}}
					/>

					<button
						onClick={() => {
							navigate('/NonMember');
						}}
						css={css`
							${typo.I_Text_12_L};
							color: ${palette.bluegray_color};
							background-color: transparent;
							text-decoration: underline;
							border: none;
							cursor: pointer;
							margin-top: 20px;
							width: 100%;
							text-align: center;
						`}>
						대여 가능한 물품 내역 확인하기
					</button>
				</div>
			</div>

			{/* 채팅 아이콘 */}
			<button
				onClick={() => window.open('https://pf.kakao.com/_DKxjPG')}
				css={css`
					position: absolute;
					width: 93px;
					height: 93px;
					top: 691px;
					left: 230px;
					border: none;
					cursor: pointer;
					background-color: transparent;
					z-index: 2;
				`}>
				<img
					src={kakao}
					alt='kakao'
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</button>
		</div>
	);
};

export default LoginPage;
