import { IControllerUsernameGenerator } from './IControllerUsernameGenerator';
import { IControllerUsernameGeneratorConstructorInput } from './IControllerUsernameGeneratorConstructorInput';

export interface IControllerUsernameGeneratorConstructor {
	(args: IControllerUsernameGeneratorConstructorInput): IControllerUsernameGenerator;
}
