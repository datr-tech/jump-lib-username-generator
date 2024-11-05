import { PermutationFullNameModelCaseLeadingUpper } from './PermutationFullNameModelCaseLeadingUpper';
import { PermutationFullNameModelCaseLower } from './PermutationFullNameModelCaseLower';
import { PermutationFullNameModelCaseUpper } from './PermutationFullNameModelCaseUpper';
import { PermutationFullNameModelFirstInitial } from './PermutationFullNameModelFirstInitial';
import { PermutationFullNameModelCaseYearSuffix } from './PermutationFullNameModelCaseYearSuffix';
import {
	IPermutationConstructor,
	IPermutationConstructors,
	IPermutationConstructorsOutput,
} from '@app/interfaces/permutations';

export const permutationConstructors: IPermutationConstructors =
	(): IPermutationConstructorsOutput => {
		const permutations: IPermutationConstructor[] = [];

		permutations.push(PermutationFullNameModelCaseLeadingUpper);
		permutations.push(PermutationFullNameModelCaseLower);
		permutations.push(PermutationFullNameModelCaseUpper);
		permutations.push(PermutationFullNameModelFirstInitial);
		permutations.push(PermutationFullNameModelCaseYearSuffix);

		return permutations;
	};
