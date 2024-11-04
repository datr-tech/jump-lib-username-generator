import { IServiceFullNames } from './IServiceFullNames';
import { IServiceFullNamesConstructorInput } from './IServiceFullNamesConstructorInput';

export interface IServiceFullNamesConstructor {
	(args: IServiceFullNamesConstructorInput): IServiceFullNames;
}
