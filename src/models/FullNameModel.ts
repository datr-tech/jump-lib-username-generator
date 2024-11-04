import { assertCondition } from '@app/assertions';
import {
	ICommonFullNameStr,
	ICommonFuncMain,
	ICommonNameStr
} from '@app/interfaces/common';
import {
	IModelFullName,
	IModelFullNameConstructor,
	IModelFullNameConstructorInput,
	IModelFullNameFuncGetForename,
	IModelFullNameFuncGetSurname
} from '@app/interfaces/models';

export const FullNameModel: IModelFullNameConstructor = ({
	fullNameStr,
	fullNameDelimiter
}: IModelFullNameConstructorInput): IModelFullName => {
	let forename: ICommonNameStr;
	let surname: ICommonNameStr;

	const getForename: IModelFullNameFuncGetForename = (): ICommonNameStr => forename;
	const getSurname: IModelFullNameFuncGetSurname = (): ICommonNameStr => surname;

	const main: ICommonFuncMain = (): void => {
		const fullNameStrTrimmed: ICommonFullNameStr = fullNameStr.trim();

		assertCondition({
			condition: !!fullNameStrTrimmed,
			errorMessage: "Invalid 'fullNameStr'",
		});

		const fullNameArr: ICommonNameStr[] = fullNameStrTrimmed.split(fullNameDelimiter.toString());
		const fullNameArrLen: number = fullNameArr.length;

		assertCondition({
			condition: fullNameArrLen > 1,
			errorMessage: "Invalid 'fullNameArr'",
		});

		assertCondition({
			condition: typeof fullNameArr[0] !== 'undefined' && !!fullNameArr[0],
			errorMessage: "Invalid 'forename'",
		});

		assertCondition({
			condition: typeof fullNameArr[fullNameArrLen - 1] !== 'undefined' && !!fullNameArr[fullNameArrLen - 1],
			errorMessage: "Invalid 'surname'",
		});

		forename = fullNameArr[0].trim();
		surname = fullNameArr[fullNameArrLen - 1].trim();
	}

	main();

	return { getForename, getSurname };
}