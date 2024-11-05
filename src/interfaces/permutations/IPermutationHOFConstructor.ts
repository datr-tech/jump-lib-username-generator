import { IPermutationConstructor } from './IPermutationConstructor';
import { IPermutationHOFConstructorInput } from './IPermutationHOFConstructorInput';

export interface IPermutationHOFConstructor {
	(args: IPermutationHOFConstructorInput): IPermutationConstructor;
}
