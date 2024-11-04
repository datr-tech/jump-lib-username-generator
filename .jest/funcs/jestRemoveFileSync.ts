import { rmSync } from 'node:fs';

export const jestRemoveFileSync = (path: string): void => rmSync(path);
