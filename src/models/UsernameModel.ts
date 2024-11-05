import { ICommonNameStr } from '@app/interfaces/common';
import {
	IModelUsername,
	IModelUsernameConstructor,
	IModelUsernameConstructorInput,
	IModelUsernameFuncGetForename,
	IModelUsernameFuncGetSurname,
	IModelUsernameFuncGetUsername,
} from '@app/interfaces/models';

export const UsernameModel: IModelUsernameConstructor = ({
	fullNameModel,
}: IModelUsernameConstructorInput): IModelUsername => {
	const getForename: IModelUsernameFuncGetForename = (): ICommonNameStr =>
		fullNameModel.getForename();
	const getSurname: IModelUsernameFuncGetSurname = (): ICommonNameStr => fullNameModel.getSurname();
	const getUsername: IModelUsernameFuncGetUsername = (): ICommonNameStr => 'TO_BE_COMPLETED';

	return {
		getForename,
		getSurname,
		getUsername,
	};
};
