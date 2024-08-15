interface tokens {
	accessToken: accessToken;
	refreshToken: refreshToken;
}
interface accessToken {
	iss: string; // 발급자
	iat: number; // 발급시간(epoch 기준)
	exp: number; // 만료시간(epoch 기준)
	type: 'access' | 'refresh'; // access vs refresh
	sub: string; // 토큰 제목
	role: 'ROLE_ADMIN' | 'ROLE_MEMBER'; // 아마 권한? 차이
}
interface refreshToken {
	iss: string; // 발급자
	iat: number; // 발급시간
	exp: number; // 만료시간
	type: 'access' | 'refresh'; // access vs refresh
	sub: string; // 토큰 제목
}
type verfiyCode = 'success' | 'refresh need' | 'failed';

const parseJwt = (jwt: string) => {
	return JSON.parse(atob(jwt.split('.')[1])) as accessToken | refreshToken;
};

const AuthVerify = ({ accessToken, refreshToken }: tokens): verfiyCode => {
	const accessExp = new Date(accessToken.exp * 1000);
	const refreshExp = new Date(refreshToken.exp * 1000);
	const now = new Date();

	if (accessExp.getTime() - now.getTime() < 0) {
		if (refreshExp.getTime() - now.getTime() > 0) {
			return 'refresh need';
		} else {
			return 'failed';
		}
	} else {
		return 'success';
	}
};

const isAdmin = (accessToken: string): boolean => {
	const tkn = parseJwt(accessToken) as accessToken;
	return tkn.role === 'ROLE_ADMIN';
};

export type { accessToken, refreshToken, verfiyCode };
export { parseJwt, AuthVerify, isAdmin };
