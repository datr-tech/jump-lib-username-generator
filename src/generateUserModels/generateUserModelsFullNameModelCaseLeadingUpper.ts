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
 * Generate a username with leading uppercase chars
 *
 * @param {IPermutationHOFFuncGenerateUsernameModelsInput} args
 * @param {IPermutationHOFFuncGenerateUsernameModelsInputModel} args.fullNameOrUsernameModel
 * @returns {IModelUsername[]}
 */
export const generateUsernameModelsFullNameModelCaseLeadingUpper: IPermutationHOFFuncGenerateUsernameModels =
	({
		fullNameOrUsernameModel,
	}: IPermutationHOFFuncGenerateUsernameModelsInput): IPermutationHOFFuncGenerateUsernameModelsOutput => {
		const usernameModels: IModelUsername[] = [];

		if (fullNameOrUsernameModel) {
			const forename: ICommonNameStr = fullNameOrUsernameModel.getForename();
			const surname: ICommonNameStr = fullNameOrUsernameModel.getSurname();

			const forenameLeadingUpperCase: ICommonNameStr = `${forename.substring(0, 1).toUpperCase()}${forename.substring(1).toLowerCase()}`;
			const surnameLeadingUpperCase: ICommonNameStr = `${surname.substring(0, 1).toUpperCase()}${surname.substring(1).toLowerCase()}`;
			const usernameStrLeadingUpperCase: ICommonNameStr = `${forenameLeadingUpperCase}.${surnameLeadingUpperCase}`;

			const fullNameOrUsernameModelUpdated: IModelFullName = FullNameModel({
				fullNameStr: usernameStrLeadingUpperCase,
				fullNameDelimiterEnum: FullNameDelimiterEnum.PERIOD,
			});

			usernameModels.push(
				UsernameModel({
					fullNameOrUsernameModel: fullNameOrUsernameModelUpdated,
					usernameStr: usernameStrLeadingUpperCase,
				}),
			);
		}

		return usernameModels;
	};
