import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global, css } from '@emotion/react';
// import reportWebVitals from './reportWebVitals';

const GlobalStyles = css`
	@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Lily+Script+One&family=Manjari&family=Poppins&display=swap');
`;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Global styles={GlobalStyles} />
		<App />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
