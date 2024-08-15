import Login from '@pages/Login/Login';
import MainPage from '@pages/MainPage';
import SignUp from '@pages/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/sign-up',
			element: <SignUp />,
		},
	]);

	return <RouterProvider router={router} />;
}
