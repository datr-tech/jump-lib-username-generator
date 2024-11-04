import { existsSync, statSync } from 'node:fs';
import { assertCondition } from '@app/assertions';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { ICommonPathStr, ICommonFuncMain } from '@app/interfaces/common';
import {
	IServiceFilePath,
	IServiceFilePathConstructor,
	IServiceFilePathConstructorInput,
	IServiceFilePathFuncGetFilePath,
	IServiceFilePathFuncSplitBy,
} from '@app/interfaces/services';

/**
 * @public
 * @constructor
 *
 * Construct a service that represents a valid file path.
 *
 * @param {IServiceFilePathConstructorInput} args
 * @param {ICommonPathStr} args.filePathStr 				- REQUIRED
 * @param {FileServiceDelimiterEnum} args.delimiter - OPTIONAL
 * @param {existsSync} args.existsFn								- OPTIONAL
 * @param {statSync} args.statFn										- OPTIONAL
 * @returns {IServiceFilePath}
 *
 * @throws When 'filePathStr' is an invalid string or does not represent a file
 */
export const FilePathService: IServiceFilePathConstructor = ({
	filePathStr,
	delimiter = FileServiceDelimiterEnum.NULL,
	existsFn = existsSync,
	statFn = statSync,
}: IServiceFilePathConstructorInput): IServiceFilePath => {
	/**
	 * @public
	 *
	 * Retrieve 'filePathStr'
	 *
	 * @returns {ICommonPathStr}
	 */
	const getFilePath: IServiceFilePathFuncGetFilePath = (): ICommonPathStr => filePathStr;

	/**
	 * @public
	 *
	 * Retrieve the 'delimiter'
	 *
	 * @returns {FileServiceDelimiterEnum}
	 */
	const splitBy: IServiceFilePathFuncSplitBy = (): FileServiceDelimiterEnum => delimiter;

	/**
	 * @private
	 *
	 * Called during construction to ensure
	 * that the received 'filePathStr' is valid.
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: !!filePathStr && existsFn(filePathStr) && statFn(filePathStr).isFile(),
			errorMessage: "Invalid 'filePathStr'",
		});
	};

	main();

	return { getFilePath, splitBy };
};
