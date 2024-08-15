import React from 'react';
import { css } from '@emotion/react';
import { palette } from '../../styles/palette';
import { typo } from '../../styles/typo';

interface RentStatusButtonProps {
	status: 'overdue' | 'rented' | 'pending'; // 연체(overdue), 대여중(rented), 대기중(pending)
	itemName: string; // 대여 물품 이름
	startDate?: string; // 대여 시작일
	dueDate?: string; // 반납 예정일
	x: number;
	y: number;
}

const RentStatusButton: React.FC<RentStatusButtonProps> = ({
	status,
	itemName,
	startDate,
	dueDate,
	x,
	y,
}) => {
	const getStatusStyles = () => {
		switch (status) {
			case 'overdue':
				return css`
					background-color: ${palette.red};
					color: ${palette.white};
				`;
			case 'rented':
				return css`
					background-color: ${palette.white};
					color: ${palette.dark_color};
				`;
			case 'pending':
				return css`
					background-color: ${palette.bluegray_color};
					color: ${palette.white};
				`;
			default:
				return '';
		}
	};

	const rentedDate =
		startDate && dueDate ? `${startDate}~${dueDate} 17:00` : '';

	// 연체일 수 계산
	const calculateOverdueDays = (dueDate: string): number => {
		const today = new Date();
		const due = new Date(dueDate);
		due.setHours(0, 0, 0, 0);
		today.setHours(0, 0, 0, 0);
		const diffTime = today.getTime() - due.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	};

	const overdueDays = dueDate ? calculateOverdueDays(dueDate) : 0;

	return (
		<div
			css={css`
				width: 336px;
				height: 51px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10px;
				border-radius: 10px;
				${getStatusStyles()};

				position: absolute;
				transform: translate(${x}px, ${y}px);
			`}>
			<span
				css={css`
					${typo.I_Text_15_B};
				`}>
				{itemName}
			</span>
			<span
				css={css`
					${typo.I_Text_13_L};
				`}>
				{status === 'overdue' && overdueDays > 0
					? `${overdueDays.toString()}일 연체`
					: ''}
				{status === 'rented' && rentedDate ? rentedDate : ''}
				{status === 'pending' ? '대여 승인 대기 중...' : ''}
			</span>
		</div>
	);
};

export default RentStatusButton;
