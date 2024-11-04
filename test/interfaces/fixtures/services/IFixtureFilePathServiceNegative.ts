import { FileServiceDelimiterEnum } from '@app/config/enums';
import { ICommonPathStr, ICommonStr } from '@app/interfaces/common';

export interface IFixtureFilePathServiceNegative {
	description: ICommonStr;
	errorExpected: ICommonStr;
	filePathStr: ICommonPathStr;
	fileServiceDelimiterEnum: FileServiceDelimiterEnum;
}
