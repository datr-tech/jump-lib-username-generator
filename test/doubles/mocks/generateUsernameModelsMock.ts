import { UsernameModel } from '@app/models';
import { IModelUsername } from '@app/interfaces/models';
import {
	IPermutationHOFFuncGenerateUsernameModels,
	IPermutationHOFFuncGenerateUsernameModelsInput,
	IPermutationHOFFuncGenerateUsernameModelsOutput,
} from '@app/interfaces/permutations';

/**
 * @public
 *
 * A mock version of the 'generateUsernameModels' function,
 * which returns either [usernameModel] or [], depending
 * upon fullNameOrUsernameModel being truthy.
 *
 * @param {IPermutationHOFFuncGenerateUsernameModelsInput} args
 * @param args.fullNameOrUsernameModel
 * @returns {IModelUsername[]}
 */
export const generateUsernameModelsMock: IPermutationHOFFuncGenerateUsernameModels = ({
	fullNameOrUsernameModel,
}: IPermutationHOFFuncGenerateUsernameModelsInput): IPermutationHOFFuncGenerateUsernameModelsOutput => {
	const usernameModels: IModelUsername[] = [];

	if (fullNameOrUsernameModel) {
		usernameModels.push(
			UsernameModel({ fullNameOrUsernameModel: fullNameOrUsernameModel as IModelUsername }),
		);
	}

	return usernameModels;
};
