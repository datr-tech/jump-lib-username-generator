import { PermutationFullNameModelFirstInitial } from './PermutationFullNameModelFirstInitial';
import {
	IPermutationConstructor,
	IPermutationConstructors,
	IPermutationConstructorsOutput,
} from '@app/interfaces/permutations';

export const permutationConstructors: IPermutationConstructors =
	(): IPermutationConstructorsOutput => {
		const permutations: IPermutationConstructor[] = [];

		permutations.push(PermutationFullNameModelFirstInitial);

		return permutations;
	};
