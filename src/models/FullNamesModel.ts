import { FullNameModel } from './FullNameModel';
import { ICommonFullNameStr, ICommonFuncMain } from '@app/interfaces/common';
import {
	IModelFullName,
	IModelFullNames,
	IModelFullNamesConstructor,
	IModelFullNamesConstructorInput,
	IModelFullNamesFuncNext,
	IModelFullNamesFuncNextOutput,
} from '@app/interfaces/models';

export const FullNamesModel: IModelFullNamesConstructor = ({
	fullNamesService,
	fullNameDelimiterEnum,
}: IModelFullNamesConstructorInput): IModelFullNames => {
	let fullNameModels: IModelFullName[];
	let pointer: number = 0;

	const next: IModelFullNamesFuncNext = (): IModelFullNamesFuncNextOutput => {
		const output: IModelFullNamesFuncNextOutput = {
			value: undefined,
			done: true,
		};
		if (pointer < fullNameModels.length) {
			output.value = fullNameModels[pointer];
			output.done = false;
			pointer++;
		}

		return output;
	};

	const main: ICommonFuncMain = (): void => {
		fullNameModels = fullNamesService
			.getFullNames()
			.map(
				(fullNameStr: ICommonFullNameStr): IModelFullName =>
					FullNameModel({ fullNameStr, fullNameDelimiterEnum }),
			);
	};

	main();

	return { length: fullNameModels.length, next };
};
