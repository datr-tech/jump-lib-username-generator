import { ICommonBool, ICommonErrorMessageStr } from '@app/interfaces/common';

export interface IAssertionConditionInput {
	condition: ICommonBool;
	errorMessage?: ICommonErrorMessageStr;
}
