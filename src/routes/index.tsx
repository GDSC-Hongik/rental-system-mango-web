import MainPage from '@pages/mainPage/MainPage';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/main-page',
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
