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
 * Generate an uppercase username
 *
 * @param {IPermutationHOFFuncGenerateUsernameModelsInput} args
 * @param {IPermutationHOFFuncGenerateUsernameModelsInputModel} args.fullNameOrUsernameModel
 * @returns {IModelUsername[]}
 */
export const generateUsernameModelsFullNameModelCaseUpper: IPermutationHOFFuncGenerateUsernameModels =
	({
		fullNameOrUsernameModel,
	}: IPermutationHOFFuncGenerateUsernameModelsInput): IPermutationHOFFuncGenerateUsernameModelsOutput => {
		const usernameModels: IModelUsername[] = [];

		if (fullNameOrUsernameModel) {
			const forename: ICommonNameStr = fullNameOrUsernameModel.getForename();
			const surname: ICommonNameStr = fullNameOrUsernameModel.getSurname();

			const forenameUCase: ICommonNameStr = forename.toUpperCase();
			const surnameUCase: ICommonNameStr = surname.toUpperCase();
			const usernameStrUCase: ICommonNameStr = `${forenameUCase}.${surnameUCase}`;

			const fullNameOrUsernameModelUpdated: IModelFullName = FullNameModel({
				fullNameStr: usernameStrUCase,
				fullNameDelimiterEnum: FullNameDelimiterEnum.PERIOD,
			});

			usernameModels.push(
				UsernameModel({
					fullNameOrUsernameModel: fullNameOrUsernameModelUpdated,
					usernameStr: usernameStrUCase,
				}),
			);
		}

		return usernameModels;
	};
