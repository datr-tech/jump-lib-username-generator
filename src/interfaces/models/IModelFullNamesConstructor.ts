import { IModelFullNames } from "./IModelFullNames";
import { IModelFullNamesConstructorInput } from "./IModelFullNamesConstructorInput";

export interface IModelFullNamesConstructor {
	(args: IModelFullNamesConstructorInput): IModelFullNames;
}