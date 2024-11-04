import { FileServiceDelimiterEnum } from '@app/config/enums';
import { IServiceFullNames } from '@app/interfaces/services';

export interface IModelFullNamesConstructorInput {
	fullNamesService: IServiceFullNames;
	fullNameDelimiter: FileServiceDelimiterEnum;
}