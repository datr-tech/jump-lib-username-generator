import { IServiceFilePath } from './IServiceFilePath';
import { IServiceFilePathConstructorInput } from './IServiceFilePathConstructorInput';

export interface IServiceFilePathConstructor {
	(args: IServiceFilePathConstructorInput): IServiceFilePath;
}
