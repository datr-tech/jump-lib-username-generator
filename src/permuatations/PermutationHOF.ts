import { PermutationTypeEnum } from '@app/config/enums';
import {
	IPermutation,
	IPermutationConstructor,
	IPermutationConstructorInput,
	IPermutationHOFConstructor,
	IPermutationHOFConstructorInput,
} from '@app/interfaces/permutations';
import { IModelUsername } from '@app/interfaces/models';

/**
 * @public
 * @constructor
 *
 * The PermutationHOF (Higher Order Function)
 * constructs Permutation constructors, ensuring
 * that all Permutations have an identical structure.
 *
 * @param {IPermutationHOFConstructorInput} args
 * @param {IPermutationHOFFuncGenerateUsernameModels} args.generateUsernameModels
 * @param {PermutationTypeEnum} args.permutationTypeEnum
 * @returns {IPermutationConstructor}
 */
export const PermutationHOF: IPermutationHOFConstructor = ({
	generateUsernameModels,
	permutationTypeEnum,
}: IPermutationHOFConstructorInput): IPermutationConstructor => {
	/**
	 * @constructor
	 *
	 * Construct a single Permutation.
	 *
	 * @param {IPermutationConstructorInput} args
	 * @param {IModelFullName | IModelUsername} args.fullNameOrUsernameModel
	 * @returns {IPermutation}
	 */
	return ({ fullNameOrUsernameModel }: IPermutationConstructorInput): IPermutation => {
		return {
			generateUsernameModels: (): IModelUsername[] =>
				generateUsernameModels({ fullNameOrUsernameModel }),
			getPermutationType: (): PermutationTypeEnum => permutationTypeEnum,
		};
	};
};
