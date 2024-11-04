import { readFileSync } from 'node:fs';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import {
	ICommonFileContentsStr,
	ICommonFullNameStr,
	ICommonFuncMain, ICommonPathStr
} from '@app/interfaces/common';
import {
	IServiceFullNames,
	IServiceFullNamesConstructor,
	IServiceFullNamesConstructorInput,
	IServiceFullNamesFuncGetFullNames
} from '@app/interfaces/services';

export const FullNamesService: IServiceFullNamesConstructor = ({
	filePathService
}: IServiceFullNamesConstructorInput ): IServiceFullNames => {
	let fullNames: ICommonFullNameStr[];

	const getFullNames: IServiceFullNamesFuncGetFullNames = (): ICommonFullNameStr[] => fullNames;

	const main: ICommonFuncMain = (): void => {
		const filePathStr: ICommonPathStr = filePathService.getFilePath();
		const fileContents: ICommonFileContentsStr = readFileSync(filePathStr, 'utf-8').toString();
		const delimiter: FileServiceDelimiterEnum = filePathService.splitBy();

		if (delimiter !== FileServiceDelimiterEnum.NOT_APPLICABLE) {
			fullNames = fileContents.split(delimiter);
		} else {
			fullNames = [];
		}
	}

	main();

	return { getFullNames };
}