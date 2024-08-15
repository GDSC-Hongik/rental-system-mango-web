import React, { useState } from 'react';
import Notice from '../components/notice/notice';
import ReservationModal from '../components/Reservation/ReservationModal';
import { RentButton } from '../components/RentButton/RentButton';

const RentPage = () => {
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);

	const rentals = [
		{
			rentalId: 1,
			itemId: 1,
			itemName: '우산',
			rating: 4.5,
			rentalStatus: 'wait',
		},
		{
			rentalId: 2,
			itemId: 2,
			itemName: '우산',
			rating: 3.0,
			rentalStatus: 'rent',
		},
	];

	//const handleRentClick = (itemId: number) => {
	// "예약하기" 버튼을 클릭했을 때 실행되는 함수
	//setSelectedItem(itemId.toString());
	//setShowModal(true);
	//};

	const handleModalClose = () => {
		setShowModal(false);
		setSelectedItem(null);
	};

	const handleRequestSubmit = () => {
		console.log('Request submitted');
		setShowModal(false);
	};

	return (
		<div>
			<Notice /> {}
			<ul>
				{rentals.map((rental) => (
					<li key={rental.rentalId}>
						<RentButton
							Status={rental.rentalStatus as 'wait' | 'rent'}
							Name={rental.itemName}
							Id={rental.itemId}
							Rating={rental.rating}
							// 예약하기 버튼 클릭 시 모달 열림
						/>
					</li>
				))}
			</ul>
			{showModal && selectedItem && (
				<ReservationModal
					onClose={handleModalClose}
					rentalItem={selectedItem}
					onSubmitRequest={handleRequestSubmit}
				/>
			)}
		</div>
	);
};

export default RentPage;
