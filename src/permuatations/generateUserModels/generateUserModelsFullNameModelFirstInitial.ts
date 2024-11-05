import { UsernameModel } from '@app/models';
import { IModelUsername } from '@app/interfaces/models';
import {
	IPermutationHOFFuncGenerateUsernameModels,
	IPermutationHOFFuncGenerateUsernameModelsInput,
	IPermutationHOFFuncGenerateUsernameModelsOutput,
} from '@app/interfaces/permutations';
import { ICommonNameStr } from '@app/interfaces/common';

/**
 * @public
 *
 * A 'generateUsernameModels' function for 'PermutationFullNameModelFirstInitial'
 *
 * @param {IPermutationHOFFuncGenerateUsernameModelsInput} args
 * @param {IPermutationHOFFuncGenerateUsernameModelsInputModel} args.fullNameOrUsernameModel
 * @returns {IModelUsername[]}
 */
export const generateUsernameModelsFullNameModelFirstInitial: IPermutationHOFFuncGenerateUsernameModels =
	({
		fullNameOrUsernameModel,
	}: IPermutationHOFFuncGenerateUsernameModelsInput): IPermutationHOFFuncGenerateUsernameModelsOutput => {
		const usernameModels: IModelUsername[] = [];

		if (fullNameOrUsernameModel) {
			const forename: ICommonNameStr = fullNameOrUsernameModel.getForename();
			const surname: ICommonNameStr = fullNameOrUsernameModel.getSurname();
			const firstInitial: ICommonNameStr = forename.substring(0, 1);
			const usernameStr: ICommonNameStr = `${firstInitial}.${surname}`;

			usernameModels.push(UsernameModel({ fullNameOrUsernameModel, usernameStr }));
		}

		return usernameModels;
	};
