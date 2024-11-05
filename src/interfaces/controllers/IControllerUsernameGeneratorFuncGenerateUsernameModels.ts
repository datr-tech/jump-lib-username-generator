import { IControllerUsernameGeneratorFuncGenerateUsernameModelsInput } from './IControllerUsernameGeneratorFuncGenerateUsernameModelsInput';
import { IModelUsername } from '@app/interfaces/models';

export interface IControllerUsernameGeneratorFuncGenerateUsernameModels {
	(args: IControllerUsernameGeneratorFuncGenerateUsernameModelsInput): IModelUsername[];
}
