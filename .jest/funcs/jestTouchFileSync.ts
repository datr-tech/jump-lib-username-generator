import { openSync } from 'node:fs';

export const jestTouchFileSync = (path: string): number => openSync(path, 'w');
