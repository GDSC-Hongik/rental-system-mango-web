import React, { useState } from 'react';
import { css } from '@emotion/react';
import { palette } from '../../styles/palette';
import { typo } from '../../styles/typo';

interface LoginModalProps {
	onClose: () => void;
	onLogin: (id: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
	const [studentId, setStudentId] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		onLogin(studentId, password); // 로그인 함수 호출
		onClose(); // 모달 닫기
	};

	return (
		<div
			css={css`
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 1000;
			`}>
			<div
				css={css`
					background-color: ${palette.background_color};
					width: 326px;
					height: 280px;
					padding: 20px;
					border-radius: 20px;
					text-align: center;
				`}>
				<button
					onClick={onClose}
					css={css`
						position: relative;
						background-color: transparent;
						left: 295px;
						width: 20px;
						height: 20px;
						border: none;
						cursor: pointer;
						display: flex;
						padding: 0;
					`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						fill='none'>
						<path
							fill='#CACDE1'
							d='m13.79 10 5.687-5.686a1.787 1.787 0 0 0 0-2.527L18.213.523a1.787 1.787 0 0 0-2.527 0L10 6.21 4.314.523a1.787 1.787 0 0 0-2.527 0L.523 1.787a1.787 1.787 0 0 0 0 2.527L6.21 10 .523 15.686a1.787 1.787 0 0 0 0 2.527l1.264 1.264c.698.697 1.83.697 2.527 0L10 13.79l5.686 5.686c.698.697 1.83.697 2.527 0l1.264-1.264a1.787 1.787 0 0 0 0-2.527L13.79 10Z'
						/>
					</svg>
				</button>
				<div
					css={css`
						${typo.I_Text_20_B}
						color: ${palette.dark_color};
						margin-top: 10px;
						margin-bottom: 20px;
					`}>
					로그인하시겠습니까?
				</div>
				<input
					type='text'
					placeholder='Student ID'
					value={studentId}
					onChange={(e) => {
						setStudentId(e.target.value);
					}}
					css={css`
						width: 263px;
						padding: 10px;
						margin-bottom: 10px;
						border: none;
						border-bottom: 1px solid ${palette.bluegray_color};
						background-color: ${palette.background_color};
						color: ${palette.dark_color};
						${typo.M_Text_20_R};
						::placeholder {
							color: ${palette.bluegray_color};
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
						width: 263px;
						padding: 10px;
						margin-bottom: 40px;
						border: none;
						border-bottom: 1px solid ${palette.bluegray_color};
						background-color: ${palette.background_color};
						color: ${palette.dark_color};
						${typo.M_Text_20_R};
						::placeholder {
							color: ${palette.bluegray_color};
						}
					`}
				/>
				<button
					onClick={handleLogin}
					css={css`
						width: 88px;
						height: 38px;
						background-color: ${palette.blue};
						border-radius: 5px;
						border: none;
						position: relative;
						cursor: pointer;
						line-height: 38px;
						color: ${palette.white};
						${typo.I_Text_15_B};
						font-style: normal;
						text-align: center;
					`}>
					확인
				</button>
			</div>
		</div>
	);
};

export default LoginModal;
