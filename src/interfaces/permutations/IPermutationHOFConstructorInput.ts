import { PermutationTypeEnum } from '@app/config/enums';
import { IPermutationHOFFuncGenerateUsernameModels } from './IPermutationHOFFuncGenerateUsernameModels';

export interface IPermutationHOFConstructorInput {
	generateUsernameModels: IPermutationHOFFuncGenerateUsernameModels;
	permutationTypeEnum: PermutationTypeEnum;
}
