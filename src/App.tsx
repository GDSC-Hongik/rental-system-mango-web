import ZustandTest from './simpleTest/ZustandTest';
import { css } from '@emotion/react';
import { RentButton } from '@components/RentButton/RentButton';
import { StudentImg } from '@components/StudentImg/StudentImg';
import blue_umbrella from '@imgs/blue_umbrella.svg';
import { GradiantBox } from '@components/GradiantBox/GradiantBox';
import { LoginButton } from '@components/LoginButton/LoginButton';
import { LoginAPI, refresh } from '@apis/LoginApi';
import {
	myRentRequstAPI,
	rentRequstAllAPI,
	rentRequstAPI,
} from '@apis/rentApi';

function App() {
	return (
		<>
			<LoginButton
				onClick={() => {
					LoginAPI({ studentId: 'A123456', password: 'password' })
						.then((res) => {
							console.log('success: ', res);
						})
						.catch((err: unknown) => {
							console.log('err: ', err);
						});
				}}
			/>
			<button
				onClick={() => {
					refresh(localStorage.getItem('accessToken') as string)
						.then((res) => {
							console.log('success', res.accessToken);
						})
						.catch((err: unknown) => {
							console.log(err);
						});
				}}>
				refresh Button
			</button>
			<button
				onClick={() => {
					rentRequstAPI({ itemId: 1 })
						.then((res) => {
							console.log('success', res.deadlineDateTime);
						})
						.catch((err: unknown) => {
							console.log(err);
						});
				}}>
				rent Item
			</button>
			<button
				onClick={() => {
					rentRequstAllAPI()
						.then((res) => {
							console.log('success', res);
						})
						.catch((err: unknown) => {
							console.log(err);
						});
				}}>
				AllItems
			</button>
			<button
				onClick={() => {
					myRentRequstAPI()
						.then((res) => {
							console.log('success', res);
						})
						.catch((err: unknown) => {
							console.log(err);
						});
				}}>
				rent Item
			</button>
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
