import { existsSync, statSync } from 'node:fs';
import { ICommonPathStr } from '@app/interfaces/common';
import { FileServiceDelimiterEnum } from '@app/config/enums';

export interface IServiceFilePathConstructorInput {
	filePathStr: ICommonPathStr;
	delimiter?: FileServiceDelimiterEnum;
	existsFn?: typeof existsSync;
	statFn?: typeof statSync;
}