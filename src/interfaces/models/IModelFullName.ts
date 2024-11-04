import { IModelFullNameFuncGetForename } from './IModelFullNameFuncGetForename';
import { IModelFullNameFuncGetSurname } from './IModelFullNameFuncGetSurname';

export interface IModelFullName {
	getForename: IModelFullNameFuncGetForename;
	getSurname: IModelFullNameFuncGetSurname;
}
