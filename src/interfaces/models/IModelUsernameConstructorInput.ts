import { ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName } from './IModelFullName';
import { IModelUsername } from './IModelUsername';

export interface IModelUsernameConstructorInput {
	fullNameOrUsernameModel: IModelFullName | IModelUsername;
	usernameStr?: ICommonNameStr;
}
