import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { css, Global } from '@emotion/react';
import baseStyle from '@styles/baseStyle';

const queryClient: QueryClient = new QueryClient({
	/* options */
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Global styles={baseStyle} />
			<Router />
			<App />
			<Global styles={css``} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>,
);
