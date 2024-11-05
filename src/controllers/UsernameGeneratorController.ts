import { FullNamesModel, UsernameModel } from '@app/models';
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
			const generatedUsernameModels: IModelUsername[] = generateUsernameModels({ fullNameModel });
			usernameModels = usernameModels.concat(generatedUsernameModels);
			fullNameModelWrapper = fullNamesModel.next();
		}

		return usernameModels;
	};

	/**
	 * @public
	 *
	 * Generate username models from a full name model in conjunction
	 * with each of the relevant permutations.
	 *
	 * @param {IControllerUsernameGeneratorFuncGenerateUsernameModelsInput} args
	 * @param {IModelFullName} args.fullNameModel
	 * @returns {IModelUsername[]}
	 */
	const generateUsernameModels: IControllerUsernameGeneratorFuncGenerateUsernameModels = ({
		fullNameModel,
	}: IControllerUsernameGeneratorFuncGenerateUsernameModelsInput): IModelUsername[] => {
		const usernameModel: IModelUsername = UsernameModel({ fullNameModel });

		return [usernameModel];

		/*
		 * @TODO Once the permutations have been written,
		 * add the required code below. Also, this function's
		 * signature may require altering, in order to support
		 * an array of permutations
		 */

		// iterate across the full name permutations
		// generate a username name model from the first permutation
		// add the generated model to the usernameModels array
		// repeat
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
