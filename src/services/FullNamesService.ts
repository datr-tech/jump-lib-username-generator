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

export const FullNamesService: IServiceFullNamesConstructor = ({
	filePathService,
}: IServiceFullNamesConstructorInput): IServiceFullNames => {
	let fullNames: ICommonFullNameStr[];

	const getFullNames: IServiceFullNamesFuncGetFullNames = (): ICommonFullNameStr[] => fullNames;

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
