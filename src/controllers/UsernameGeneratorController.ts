import { FullNamesModel } from '@app/models';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonFuncMain } from '@app/interfaces/common';
import { IModelFullNames, IModelFullNamesFuncNextOutput } from '@app/interfaces/models';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';

/**
 * @public
 * @constructor
 *
 * @param filePathStr
 * @param delimiter
 * @param fullNameDelimiterEnum
 *
 */
export const UsernameGeneratorController = ({
	filePathStr,
	delimiter,
	fullNameDelimiterEnum
}) => {
	let filePathService: IServiceFilePath;
	let fullNamesService: IServiceFullNames;
	let fullNamesModel: IModelFullNames;

	/**
	 * @public
	 */
	const generate = (): number => {
		let fullNameModelWrapper: IModelFullNamesFuncNextOutput = fullNamesModel.next();
		let count: number = 0;
		while (!fullNameModelWrapper.done) {
			//let fullNameModel: IModelFullName = fullNameModelWrapper.value;
			// recursive call and merge
			count++
			fullNameModelWrapper = fullNamesModel.next();
		}

		return count;
	}

	/**
	 * @private
	 */
	const main: ICommonFuncMain = (): void => {
		filePathService = FilePathService({ filePathStr, delimiter });
		fullNamesService = FullNamesService({ filePathService });
		fullNamesModel = FullNamesModel({ fullNamesService, fullNameDelimiterEnum });
	}

	main();
}