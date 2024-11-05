import { IModelUsername } from './IModelUsername';
import { IModelUsernameConstructorInput } from './IModelUsernameConstructorInput';

export interface IModelUsernameConstructor {
	(args: IModelUsernameConstructorInput): IModelUsername;
}
