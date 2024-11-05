import { FullNamesModel } from '@app/models';
import { permutationConstructors } from '@app/permuatations';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonFuncMain } from '@app/interfaces/common';
import {
	IControllerUsernameGenerator,
	IControllerUsernameGeneratorConstructor,
	IControllerUsernameGeneratorConstructorInput,
	IControllerUsernameGeneratorFuncGenerate,
	IControllerUsernameGeneratorFuncGenerateUsernameModels,
	IControllerUsernameGeneratorFuncGenerateUsernameModelsInput,
} from '@app/interfaces/controllers';
import {
	IModelFullName,
	IModelFullNames,
	IModelFullNamesFuncNextOutput,
	IModelUsername,
} from '@app/interfaces/models';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';
import {
	IPermutationConstructor,
	IPermutationConstructorsOutput,
} from '@app/interfaces/permutations';

/**
 * @public
 * @constructor
 *
 * Construct an instance of the UsernameGeneratorController.
 *
 * @param {IControllerUsernameGeneratorConstructorInput} args
 * @param {ICommonPathStr} args.filePathStr
 * @param {FileServiceDelimiterEnum} args.fileServiceDelimiterEnum
 * @param { FullNameDelimiterEnum} args.fullNameDelimiterEnum
 * @returns {IControllerUsernameGenerator}
 */
export const UsernameGeneratorController: IControllerUsernameGeneratorConstructor = ({
	filePathStr,
	fileServiceDelimiterEnum,
	fullNameDelimiterEnum,
}: IControllerUsernameGeneratorConstructorInput): IControllerUsernameGenerator => {
	let filePathService: IServiceFilePath;
	let fullNamesService: IServiceFullNames;
	let fullNamesModel: IModelFullNames;

	/**
	 * @public
	 *
	 * Entry point for the generation of username model,
	 * using all fullName models.
	 *
	 * @returns {IModelUsername[]}
	 */
	const generate: IControllerUsernameGeneratorFuncGenerate = (): IModelUsername[] => {
		let usernameModels: IModelUsername[] = [];
		let fullNameModelWrapper: IModelFullNamesFuncNextOutput = fullNamesModel.next();

		while (!fullNameModelWrapper.done) {
			const fullNameModel: IModelFullName = fullNameModelWrapper.value;
			const permutationConstructorsArr: IPermutationConstructorsOutput = permutationConstructors();

			/*
			 * Use the permutations to generate usernameModels
			 */
			const generatedUsernameModels: IModelUsername[] = generateUsernameModels({
				fullNameOrUsernameModel: fullNameModel,
				permutationConstructorsArr,
			});

			/*
			 * Then apply the permutations to each of the generated usernameModels,
			 * before combining the result with the overarching 'usernameModels' array.
			 */
			usernameModels = usernameModels.concat(
				generatedUsernameModels.reduce(
					(arr: IModelUsername[], usernameModel: IModelUsername): IModelUsername[] =>
						arr.concat(
							generateUsernameModels({
								fullNameOrUsernameModel: usernameModel,
								permutationConstructorsArr,
							}),
						),
					[],
				),
			);

			fullNameModelWrapper = fullNamesModel.next();
		}

		return usernameModels;
	};

	/**
	 * @public
	 *
	 * Generate username models from a full name model in conjunction
	 * with each of the relevant permutationConstructors.
	 *
	 * @param {IControllerUsernameGeneratorFuncGenerateUsernameModelsInput} args
	 * @param {IModelFullName} args.fullNameOrUsernameModel
	 * @param {IPermutationConstructor[]} args.permutationConstructorsArr
	 * @returns {IModelUsername[]}
	 */
	const generateUsernameModels: IControllerUsernameGeneratorFuncGenerateUsernameModels = ({
		fullNameOrUsernameModel,
		permutationConstructorsArr,
	}: IControllerUsernameGeneratorFuncGenerateUsernameModelsInput): IModelUsername[] => {
		return permutationConstructorsArr.reduce(
			(
				acc: IModelUsername[],
				PermutationConstructor: IPermutationConstructor,
			): IModelUsername[] => {
				return acc.concat(
					PermutationConstructor({ fullNameOrUsernameModel }).generateUsernameModels(),
				);
			},
			[],
		);
	};

	/**
	 * @private
	 */
	const main: ICommonFuncMain = (): void => {
		filePathService = FilePathService({ filePathStr, delimiter: fileServiceDelimiterEnum });
		fullNamesService = FullNamesService({ filePathService });
		fullNamesModel = FullNamesModel({ fullNamesService, fullNameDelimiterEnum });
	};

	main();

	return {
		generate,
		generateUsernameModels,
	};
};
