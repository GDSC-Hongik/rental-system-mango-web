import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes';
import ZustandTest from './simpleTest/ZustandTest';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ApiTestCompoent from '@components/ApiTest';

const queryClient: QueryClient = new QueryClient({
	/* options */
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* zustand 테스트를 위한 컴포넌트 */}
				<ZustandTest />
				<Router />
				<ApiTestCompoent />

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default App;
