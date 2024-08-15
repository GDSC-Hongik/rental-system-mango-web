import RentStatusButton from '@components/RentStatus/RentStatus';

function App() {
	return (
		<>
			<RentStatusButton
				status='overdue'
				itemName='우산1'
				startDate='2024-02-12'
				dueDate='2024-02-14'
			/>
		</>
	);
}

export default App;
