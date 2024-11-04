import { readFileSync } from 'node:fs';

export const jestReadFileSync = (path: string): string => {
	return readFileSync(path, {
		encoding: 'utf8',
	});
};
