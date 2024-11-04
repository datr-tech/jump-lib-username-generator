import { FullNameDelimiterEnum } from '@app/config/enums';
import { IServiceFullNames } from '@app/interfaces/services';

export interface IModelFullNamesConstructorInput {
	fullNamesService: IServiceFullNames;
	fullNameDelimiterEnum: FullNameDelimiterEnum;
}
