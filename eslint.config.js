// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';
import eslint from '@eslint/js';
import tseslint, { plugin } from 'typescript-eslint';
import pluginQuery from '@tanstack/eslint-plugin-query';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
	...tseslint.config(
		eslint.configs.recommended,
		...tseslint.configs.strictTypeChecked,
		{
			languageOptions: {
				parserOptions: {
					project: true,
					tsconfigRootDir: __dirname,
				},
			},
			ignores: ['eslint.config.js', 'vite.config.ts'],
		},
	),
	...pluginQuery.configs['flat/recommended'],
];
