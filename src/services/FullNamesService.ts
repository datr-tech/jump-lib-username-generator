import { readFileSync } from 'node:fs';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import {
	ICommonFileContentsStr,
	ICommonFullNameStr,
	ICommonFuncMain,
	ICommonPathStr,
} from '@app/interfaces/common';
import {
	IServiceFullNames,
	IServiceFullNamesConstructor,
	IServiceFullNamesConstructorInput,
	IServiceFullNamesFuncGetFullNames,
} from '@app/interfaces/services';
import { assertCondition } from '@app/assertions';

/**
 * @public
 * @constructor
 *
 * Construct a service representing the full names within the file identified by 'filePathService'.
 *
 * @param {IServiceFullNamesConstructorInput} args
 * @param {IServiceFilePath} args.filePathService
 * @returns {IServiceFullNames}
 *
 * @throws When the 'delimiter' used within the 'filePathService' is invalid
 * @throws When the file represented by the 'filePathService' is empty
 */
export const FullNamesService: IServiceFullNamesConstructor = ({
	filePathService,
}: IServiceFullNamesConstructorInput): IServiceFullNames => {
	let fullNames: ICommonFullNameStr[];

	/**
	 * @public
	 *
	 * Retrieve an array of full names from the file identified by 'filePathService'.
	 *
	 * @returns {ICommonFullNameStr[]}
	 */
	const getFullNames: IServiceFullNamesFuncGetFullNames = (): ICommonFullNameStr[] => fullNames;

	/**
	 * @private
	 *
	 * Called during construction to ensure
	 * that a valid 'delimiter' was set within
	 * the 'filePathService' and that the identified
	 * file is not empty.
	 */
	const main: ICommonFuncMain = (): void => {
		const delimiter: FileServiceDelimiterEnum = filePathService.splitBy();

		assertCondition({
			condition: delimiter !== FileServiceDelimiterEnum.NULL,
			errorMessage: "Invalid 'delimiter'",
		});

		const filePathStr: ICommonPathStr = filePathService.getFilePath();
		const fileContents: ICommonFileContentsStr = readFileSync(filePathStr, 'utf-8').toString();

		assertCondition({
			condition: !!fileContents,
			errorMessage: "Invalid 'fileContents'",
		});

		fullNames = fileContents.split(delimiter.toString());
	};

	main();

	return { getFullNames } as IServiceFullNames;
};
