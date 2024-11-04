import { existsSync, statSync } from 'node:fs';
import { assertCondition } from '@app/assertions';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { ICommonPathStr, ICommonFuncMain } from '@app/interfaces/common';
import {
	IServiceFilePath,
	IServiceFilePathConstructor,
	IServiceFilePathConstructorInput,
	IServiceFilePathFuncGetFilePath,
	IServiceFilePathFuncSplitBy
} from '@app/interfaces/services';

export const FilePathService: IServiceFilePathConstructor = ({
	filePathStr,
	delimiter = FileServiceDelimiterEnum.NOT_APPLICABLE,
	existsFn = existsSync,
	statFn = statSync
}: IServiceFilePathConstructorInput): IServiceFilePath => {
	const getFilePath: IServiceFilePathFuncGetFilePath = (): ICommonPathStr => filePathStr;
	const splitBy: IServiceFilePathFuncSplitBy = (): FileServiceDelimiterEnum => delimiter;

	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: !!filePathStr && existsFn(filePathStr) && statFn(filePathStr).isFile(),
			errorMessage: "Invalid 'filePathStr'"
		});
	}

	main();

	return { getFilePath, splitBy };
}