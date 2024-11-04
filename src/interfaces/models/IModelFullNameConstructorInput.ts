import { FileServiceDelimiterEnum } from '@app/config/enums';
import { ICommonFullNameStr } from '@app/interfaces/common';

export interface IModelFullNameConstructorInput {
	fullNameStr: ICommonFullNameStr;
	fullNameDelimiter: FileServiceDelimiterEnum;
}