import { FullNameModel, UsernameModel } from '@app/models';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';
import {
	IPermutationHOFFuncGenerateUsernameModels,
	IPermutationHOFFuncGenerateUsernameModelsInput,
	IPermutationHOFFuncGenerateUsernameModelsOutput,
} from '@app/interfaces/permutations';
import { ICommonNameStr } from '@app/interfaces/common';
import { FullNameDelimiterEnum } from '@app/config/enums';

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

			const fullNameOrUsernameModelUpdated: IModelFullName = FullNameModel({
				fullNameStr: usernameStr,
				fullNameDelimiterEnum: FullNameDelimiterEnum.PERIOD,
			});

			usernameModels.push(
				UsernameModel({
					fullNameOrUsernameModel: fullNameOrUsernameModelUpdated,
					usernameStr,
				}),
			);
		}

		return usernameModels;
	};
