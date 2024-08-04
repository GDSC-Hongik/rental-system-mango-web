import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
			{ find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
			{ find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
		],
	},

	server: {
		host: '0.0.0.0',
		port: 3000, // 포트 설정. 기본값은 5173
		open: true, // 서버 시작 시 브라우저 자동 열기
	},
	build: {
		outDir: 'build',
	},
});
