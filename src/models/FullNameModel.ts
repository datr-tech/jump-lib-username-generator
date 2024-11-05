import { assertCondition } from '@app/assertions';
import { ICommonFullNameStr, ICommonFuncMain, ICommonNameStr } from '@app/interfaces/common';
import {
	IModelFullName,
	IModelFullNameConstructor,
	IModelFullNameConstructorInput,
	IModelFullNameFuncGetForename,
	IModelFullNameFuncGetSurname,
} from '@app/interfaces/models';

/**
 * @public
 * @constructor
 *
 * Construct a model to represent a single full name.
 *
 * @param {IModelFullNameConstructorInput} args
 * @param {ICommonFullNameStr} args.fullNameStr
 * @param {FullNameDelimiterEnum} args.fullNameDelimiterEnum
 * @param {number} args.surnameIndex - OPTIONAL
 * @returns {IModelFullName}
 *
 * @throws When 'fullNameStr' is invalid
 * @throws When 'fullNameStrTrimmed' is invalid
 * @throws When 'fullNameArr' is invalid
 * @throws When 'forename' is invalid
 * @throws When 'surname' is invalid
 */
export const FullNameModel: IModelFullNameConstructor = ({
	fullNameStr,
	fullNameDelimiterEnum,
	surnameIndex,
}: IModelFullNameConstructorInput): IModelFullName => {
	let forename: ICommonNameStr;
	let surname: ICommonNameStr;

	/**
	 * @public
	 *
	 * Get the forename extracted from 'fullNameStr'.
	 *
	 * @returns {ICommonNameStr}
	 */
	const getForename: IModelFullNameFuncGetForename = (): ICommonNameStr => forename;

	/**
	 * @public
	 *
	 * Get the surname extracted from 'fullNameStr'.
	 *
	 * @returns {ICommonNameStr}
	 */
	const getSurname: IModelFullNameFuncGetSurname = (): ICommonNameStr => surname;

	/**
	 * @private
	 *
	 * Main is called by default during construction,
	 * It asserts the validity of 'fullNameStr' before
	 * populating 'forename' and 'surname'.
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: !!fullNameStr,
			errorMessage: "Invalid 'fullNameStr'",
		});

		const fullNameStrTrimmed: ICommonFullNameStr = fullNameStr.trim();

		assertCondition({
			condition: !!fullNameStrTrimmed,
			errorMessage: "Invalid 'fullNameStrTrimmed'",
		});

		const fullNameArr: ICommonNameStr[] = fullNameStrTrimmed.split(
			fullNameDelimiterEnum.toString(),
		);
		const fullNameArrLen: number = fullNameArr.length;

		assertCondition({
			condition: fullNameArrLen > 1,
			errorMessage: "Invalid 'fullNameArr'",
		});

		assertCondition({
			condition: typeof fullNameArr[0] !== 'undefined' && !!fullNameArr[0],
			errorMessage: "Invalid 'forename'",
		});

		if (!surnameIndex) {
			surnameIndex = fullNameArrLen - 1;
		}

		assertCondition({
			condition: typeof fullNameArr[surnameIndex] !== 'undefined' && !!fullNameArr[surnameIndex],
			errorMessage: "Invalid 'surname'",
		});

		forename = fullNameArr[0];
		surname = fullNameArr[surnameIndex];
	};

	main();

	return { getForename, getSurname };
};
