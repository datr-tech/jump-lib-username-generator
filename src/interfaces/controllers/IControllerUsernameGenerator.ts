import { IControllerUsernameGeneratorFuncGenerate } from './IControllerUsernameGeneratorFuncGenerate';
import { IControllerUsernameGeneratorFuncGenerateUsernameModels } from './IControllerUsernameGeneratorFuncGenerateUsernameModels';

export interface IControllerUsernameGenerator {
	generate: IControllerUsernameGeneratorFuncGenerate;
	generateUsernameModels: IControllerUsernameGeneratorFuncGenerateUsernameModels;
}
