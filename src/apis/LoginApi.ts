import axiosClient from '.';

interface JWT {
	accessToken: string;
	refreshToken: string;
}
interface LoginReq {
	studentId: string;
	password: string;
}

const LoginAPI = async ({ studentId, password }: LoginReq): Promise<JWT> => {
	const info: LoginReq = {
		studentId: studentId,
		password: password,
	};
	const res = await axiosClient.post<JWT>('auth/login', info, {
		withCredentials: false,
	});
	localStorage.setItem('accessToken', res.data.accessToken);
	localStorage.setItem('refreshToken', res.data.refreshToken);
	return res.data;
};
const refresh = async (refreshToken: string): Promise<JWT> => {
	const res = await axiosClient.post<JWT>('/auth/reissue', {
		headers: {
			Authorization: `Bearer ${refreshToken}`,
		},
	});
	return res.data;
};

export { LoginAPI, refresh };
