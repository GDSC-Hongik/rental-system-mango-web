import Router from './routes';
import ZustandTest from './simpleTest/ZustandTest';

function App() {
	return (
		<>
			<div className='App'>hello, react</div>

			{/* zustand 테스트를 위한 컴포넌트 */}
			<ZustandTest />
			<Router />
		</>
	);
}

export default App;
