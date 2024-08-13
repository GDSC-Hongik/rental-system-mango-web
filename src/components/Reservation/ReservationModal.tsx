import React, { useState } from 'react';
import { css } from '@emotion/react';
import { palette } from '../../styles/palette';
import { typo } from '../../styles/typo';

interface ReservationModalProps {
	onClose: () => void;
	rentalItem: string; // 대여물품 번호
	onSubmitRequest: (message: string) => void; // 요청 메시지
}

const ReservationModal: React.FC<ReservationModalProps> = ({
	onClose,
	rentalItem,
	onSubmitRequest,
}) => {
	const [requestMessage, setRequestMessage] = useState('');

	// 오늘 날짜
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (일요일) ~ 6 (토요일)

	// 반납 예정일 계산
	let returnDate: Date;
	if (dayOfWeek === 5) {
		// 금요일인 경우
		returnDate = today; // 반납 예정일을 당일 17시로 설정
	} else {
		returnDate = new Date(today);
		returnDate.setDate(today.getDate() + 1); // 다음날로 설정
	}
	const formattedDate = `${String(returnDate.getFullYear())}.${String(returnDate.getMonth() + 1).padStart(2, '0')}.${String(returnDate.getDate()).padStart(2, '0')} 17:00시`;

	const handleRequestMessageChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setRequestMessage(e.target.value);
	};

	const handleConfirmClick = () => {
		onSubmitRequest(requestMessage); // 요청 메시지 제출
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
					flex-shrink: 0;
					border-radius: 20px;
					text-align: center;
					z-index: 1;
				`}>
				<div
					css={css`
						${typo.I_Text_20_B}
						color: ${palette.dark_color};
						text-align: center;
						font-style: normal;
						margin-top: 20px;
						margin-bottom: 10px;
					`}>
					예약 되었습니다!
				</div>
				<div
					css={css`
						${typo.I_Text_10_L}
						color: ${palette.dark_color};
						text-align: center;
						font-style: normal;
						margin-bottom: 10px;
					`}>
					금일 5시까지 대여하러 T605로 오지 않으면 자동 예약 취소됩니다.
					<br />
					반납예정일: {formattedDate}
					<br />
					대여물품: {rentalItem}
				</div>
				<textarea
					placeholder='요청메세지가 있다면 적어주세요!'
					value={requestMessage}
					onChange={handleRequestMessageChange}
					css={css`
						width: 276px;
						height: 80px;
						border-radius: 5px;
						background-color: ${palette.white};
						color: ${palette.black};
						${typo.I_Text_10_L}
						margin-bottom: 30px;
					`}
				/>
				<button
					onClick={handleConfirmClick}
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

export default ReservationModal;
