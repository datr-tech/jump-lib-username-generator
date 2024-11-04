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

/**
 * @public
 * @constructor
 *
 * Construct a FullNameModel (singular) iterator.
 *
 * @param {IModelFullNamesConstructorInput} args
 * @param {IServiceFullNames} args.fullNamesService
 * @param {FullNameDelimiterEnum} args.fullNameDelimiterEnum
 * @returns {IModelFullNames}
 */
export const FullNamesModel: IModelFullNamesConstructor = ({
	fullNamesService,
	fullNameDelimiterEnum,
}: IModelFullNamesConstructorInput): IModelFullNames => {
	let fullNameModels: IModelFullName[];
	let pointer: number = 0;

	/**
	 * @public
	 *
	 * The 'next' func enables FullNamesModel to provide Iterator functionality.
	 *
	 * @example
	 *
	 * let fullNameModelWrapper = fullNamesModel.next();
	 * while (!fullNameModelWrapper.done) {
	 *   let fullNameModel = fullNameModelWrapper.value;
	 *   ...
	 *   fullNameModelWrapper = fullNamesModel.next();
	 * }
	 */
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

	/**
	 * @private
	 *
	 * Based upon the full names from the service,
	 * populate the 'fullNameModels' array with
	 * instances of FullNameModel.
	 */
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
