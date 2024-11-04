import { resolve } from 'node:path';
import { ICommonPathStr } from '@app/interfaces/common';

export const CONSTS_PATHS_APP_ROOT: ICommonPathStr = resolve('./');
export const CONSTS_PATHS_TEST_DIR: ICommonPathStr = resolve(`${CONSTS_PATHS_APP_ROOT}`, './test');
