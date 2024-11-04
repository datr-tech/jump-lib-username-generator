import { IModelFullName } from './IModelFullName';
import { IModelFullNameConstructorInput } from './IModelFullNameConstructorInput';

export interface IModelFullNameConstructor {
	(args: IModelFullNameConstructorInput): IModelFullName;
}
