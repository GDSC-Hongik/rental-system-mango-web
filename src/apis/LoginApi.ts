import axiosClient from '.';

interface JWT {
	accessToken: string;
	refreshToken: string;
}
export interface LoginReq {
	studentId: string;
	password: string;
}

const LoginAPI = async ({ studentId, password }: LoginReq): Promise<void> => {
	const info: LoginReq = {
		studentId: studentId,
		password: password,
	};
	const res = await axiosClient.post<JWT>('auth/login', info, {
		withCredentials: false,
	});
	const token = res.data;
	localStorage.setItem('accessToken', token.accessToken);
	localStorage.setItem('refreshToken', token.refreshToken);
	// return res.data;
	return;
};
const refresh = async (refreshToken: string): Promise<void> => {
	const res = await axiosClient.post<JWT>('/auth/reissue', {
		headers: {
			Authorization: `Bearer ${refreshToken}`,
		},
	});
	const token = res.data;
	localStorage.setItem('accessToken', token.accessToken);
	localStorage.setItem('refreshToken', token.refreshToken);
	return;
};

export { LoginAPI, refresh };
