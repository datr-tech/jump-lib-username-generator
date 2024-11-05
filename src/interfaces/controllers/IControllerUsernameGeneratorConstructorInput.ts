import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { ICommonPathStr } from '@app/interfaces/common';

export interface IControllerUsernameGeneratorConstructorInput {
	filePathStr: ICommonPathStr;
	fileServiceDelimiterEnum: FileServiceDelimiterEnum;
	fullNameDelimiterEnum: FullNameDelimiterEnum;
}
