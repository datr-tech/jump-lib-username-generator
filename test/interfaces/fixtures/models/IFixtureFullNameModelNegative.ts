import { FullNameDelimiterEnum } from '@app/config/enums';
import { ICommonFullNameStr, ICommonStr } from '@app/interfaces/common';

export interface IFixtureFullNameModelNegative {
	description: ICommonStr;
	errorExpected: ICommonStr;
	fullNameDelimiterEnum: FullNameDelimiterEnum;
	fullNameStr: ICommonFullNameStr;
}
