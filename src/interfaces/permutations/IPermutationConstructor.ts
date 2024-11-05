import { IPermutation } from './IPermutation';
import { IPermutationConstructorInput } from './IPermutationConstructorInput';

export interface IPermutationConstructor {
	(args: IPermutationConstructorInput): IPermutation;
}
