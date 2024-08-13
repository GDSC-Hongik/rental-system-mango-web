import axios from 'axios';

const axiosClient = axios.create({
	// TODO: api 주소 변경 및 환경변수로 변경
	baseURL: 'localhost',
	timeout: 0,
	headers: { 'content-Type': 'application/json' },
	withCredentials: true,
});

export default axiosClient;
