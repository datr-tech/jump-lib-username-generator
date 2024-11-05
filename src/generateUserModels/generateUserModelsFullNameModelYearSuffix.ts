import { FullNameModel, UsernameModel } from '@app/models';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';
import {
	IPermutationHOFFuncGenerateUsernameModels,
	IPermutationHOFFuncGenerateUsernameModelsInput,
	IPermutationHOFFuncGenerateUsernameModelsOutput,
} from '@app/interfaces/permutations';
import { ICommonNameStr } from '@app/interfaces/common';
import { FullNameDelimiterEnum } from '@app/config/enums';
import { CONSTS_YEARS_MAX, CONSTS_YEARS_MIN } from '@app/config/consts/years';

/**
 * @public
 *
 * Generate usernames with a year suffix
 *
 * @param {IPermutationHOFFuncGenerateUsernameModelsInput} args
 * @param {IPermutationHOFFuncGenerateUsernameModelsInputModel} args.fullNameOrUsernameModel
 * @returns {IModelUsername[]}
 */
export const generateUsernameModelsFullNameModelYearSuffix: IPermutationHOFFuncGenerateUsernameModels =
	({
		fullNameOrUsernameModel,
	}: IPermutationHOFFuncGenerateUsernameModelsInput): IPermutationHOFFuncGenerateUsernameModelsOutput => {
		const usernameModels: IModelUsername[] = [];

		if (fullNameOrUsernameModel) {
			const forename: ICommonNameStr = fullNameOrUsernameModel.getForename();
			const surname: ICommonNameStr = fullNameOrUsernameModel.getSurname();

			for (let i: number = CONSTS_YEARS_MIN; i <= CONSTS_YEARS_MAX; ++i) {
				const usernameWithYearSuffix: ICommonNameStr = `${forename}.${surname}.${i}`;

				const fullNameOrUsernameModelUpdated: IModelFullName = FullNameModel({
					fullNameStr: usernameWithYearSuffix,
					fullNameDelimiterEnum: FullNameDelimiterEnum.PERIOD,
					surnameIndex: 1,
				});

				usernameModels.push(
					UsernameModel({
						fullNameOrUsernameModel: fullNameOrUsernameModelUpdated,
						usernameStr: usernameWithYearSuffix,
					}),
				);
			}
		}

		return usernameModels;
	};
