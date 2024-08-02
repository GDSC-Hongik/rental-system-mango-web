import { useNavigate } from 'react-router-dom';

export default function MainPage() {
	const navigate = useNavigate();
	const navigateMain = () => {
		navigate('/');
	};
	const navigateLogin = () => {
		navigate('/login');
	};
	const navigateSignUp = () => {
		navigate('/sign-up');
	};

	return (
		<>
			<div>main page</div>
			<div>
				<button onClick={navigateMain}>main</button>
			</div>
			<div>
				<button onClick={navigateLogin}>login</button>
			</div>
			<div>
				<button
					onClick={navigateSignUp}
					value={'sign-up'}>
					sign-up
				</button>
			</div>
		</>
	);
}
