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
 * Generate a lowercase username
 *
 * @param {IPermutationHOFFuncGenerateUsernameModelsInput} args
 * @param {IPermutationHOFFuncGenerateUsernameModelsInputModel} args.fullNameOrUsernameModel
 * @returns {IModelUsername[]}
 */
export const generateUsernameModelsFullNameModelCaseLower: IPermutationHOFFuncGenerateUsernameModels =
	({
		fullNameOrUsernameModel,
	}: IPermutationHOFFuncGenerateUsernameModelsInput): IPermutationHOFFuncGenerateUsernameModelsOutput => {
		const usernameModels: IModelUsername[] = [];

		if (fullNameOrUsernameModel) {
			const forename: ICommonNameStr = fullNameOrUsernameModel.getForename();
			const surname: ICommonNameStr = fullNameOrUsernameModel.getSurname();

			const forenameLCase: ICommonNameStr = forename.toLowerCase();
			const surnameLCase: ICommonNameStr = surname.toLowerCase();
			const usernameStrLCase: ICommonNameStr = `${forenameLCase}.${surnameLCase}`;

			const fullNameOrUsernameModelUpdated: IModelFullName = FullNameModel({
				fullNameStr: usernameStrLCase,
				fullNameDelimiterEnum: FullNameDelimiterEnum.PERIOD,
			});

			usernameModels.push(
				UsernameModel({
					fullNameOrUsernameModel: fullNameOrUsernameModelUpdated,
					usernameStr: usernameStrLCase,
				}),
			);
		}

		return usernameModels;
	};
