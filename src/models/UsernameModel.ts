import { ICommonNameStr } from '@app/interfaces/common';
import {
	IModelUsername,
	IModelUsernameConstructor,
	IModelUsernameConstructorInput,
	IModelUsernameFuncGetForename,
	IModelUsernameFuncGetSurname,
	IModelUsernameFuncGetUsername,
} from '@app/interfaces/models';

/**
 * @public
 * @constructor
 *
 * Construct an instance of the UsernameModel
 *
 * @param {IModelUsernameConstructorInput} args
 * @param {IModelFullName|IModelUsername} args.fullNameOrUsernameModel
 * @param {ICommonNameStr} args.usernameStr
 * @returns {IModelUsername}
 */
export const UsernameModel: IModelUsernameConstructor = ({
	fullNameOrUsernameModel,
	usernameStr,
}: IModelUsernameConstructorInput): IModelUsername => {
	/**
	 * @public
	 *
	 * Retrieves the forename associated with the parent 'fullNameOrUsernameModel'
	 *
	 * @returns {ICommonNameStr}
	 */
	const getForename: IModelUsernameFuncGetForename = (): ICommonNameStr =>
		fullNameOrUsernameModel.getForename();

	/**
	 * @public
	 *
	 * Retrieves the surname associated with the parent 'fullNameOrUsernameModel'
	 *
	 * @returns {ICommonNameStr}
	 */
	const getSurname: IModelUsernameFuncGetSurname = (): ICommonNameStr =>
		fullNameOrUsernameModel.getSurname();

	/**
	 * @public
	 *
	 * Retrieves the usernameStr
	 *
	 * @returns {ICommonNameStr}
	 */
	const getUsername: IModelUsernameFuncGetUsername = (): ICommonNameStr => usernameStr;

	return {
		getForename,
		getSurname,
		getUsername,
	};
};
