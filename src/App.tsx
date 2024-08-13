import ZustandTest from './simpleTest/ZustandTest';
import { css } from '@emotion/react';
import { RentButton } from '@components/RentButton/RentButton';
import { StudentImg } from '@components/StudentImg/StudentImg';
import blue_umbrella from '@imgs/blue_umbrella.svg';
import { GradiantBox } from '@components/GradiantBox/GradiantBox';
import { LoginButton } from '@components/LoginButton/LoginButton';

function App() {
	return (
		<>
			<LoginButton
				onClick={() => {
					console.log('working');
				}}
			/>
			<GradiantBox>
				<></>
			</GradiantBox>
			<StudentImg
				size='small'
				img={blue_umbrella}
			/>
			<StudentImg
				size='big'
				img={blue_umbrella}
			/>
			<RentButton
				Status={'wait'}
				Name={'우산'}
				Id={1}
				Rating={3.2}></RentButton>
			<div
				css={css`
					color: blue;
					&:hover {
						color: red;
					}
				`}>
				emotions 테스트입니다.
			</div>
			<p>app 컴포넌트입니다</p>
			{/* zustand 테스트를 위한 컴포넌트 */}
			<ZustandTest />
			{/* <ApiTestCompoent /> */}
		</>
	);
}

export default App;
