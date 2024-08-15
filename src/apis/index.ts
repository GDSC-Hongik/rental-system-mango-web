import axios from 'axios';
import { accessToken, AuthVerify, parseJwt, refreshToken } from './utils/token';
import { refresh } from './LoginApi';

const axiosClient = axios.create({
	// TODO: api 주소 변경 및 환경변수로 변경
	baseURL: 'http://localhost:8080',
	timeout: 0,
	headers: { 'content-Type': 'application/json' },
	withCredentials: true,
});

axiosClient.interceptors.request.use(
	async (config) => {
		const accessToken = localStorage.getItem('accessToken');
		// TODO: refresh 는 쿠키로 저장....
		const refreshToken = localStorage.getItem('refreshToken');

		console.log(
			"it's on interceptors",
			accessToken,
			'여기까지가 accessToken입니다\n',
			refreshToken,
		);

		if (config.withCredentials === true) {
			if (accessToken === null || refreshToken === null) {
				return Promise.reject(Error('emtpy token'));
			} else {
				const accessTkn = parseJwt(accessToken) as accessToken;
				const refreshTkn = parseJwt(refreshToken) as refreshToken;
				const status = AuthVerify({
					accessToken: accessTkn,
					refreshToken: refreshTkn,
				});

				switch (status) {
					case 'success': {
						config.headers.Authorization = `Bearer ${accessToken}`;
						return config;
					}
					case 'refresh need': {
						await refresh(refreshToken);
						config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken') as string}`;
						return config;
					}
					case 'failed': {
						return Promise.reject(Error('token expired'));
					}
				}
			}
		}
		return config;
	},
	(error: Error) => {
		return Promise.reject(error);
	},
);

export default axiosClient;
