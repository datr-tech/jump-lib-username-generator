import { IModelUsernameFuncGetForename } from './IModelUsernameFuncGetForename';
import { IModelUsernameFuncGetSurname } from './IModelUsernameFuncGetSurname';
import { IModelUsernameFuncGetUsername } from './IModelUsernameFuncGetUsername';

export interface IModelUsername {
	getForename: IModelUsernameFuncGetForename;
	getSurname: IModelUsernameFuncGetSurname;
	getUsername: IModelUsernameFuncGetUsername;
}
