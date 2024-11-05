import { PermutationTypeEnum } from '@app/config/enums';
import { PermutationHOF } from '@app/permuatations/PermutationHOF';
import { generateUsernameModelsFullNameModelYearSuffix } from '@app/generateUserModels';
import { IPermutationConstructor } from '@app/interfaces/permutations';

export const PermutationFullNameModelCaseYearSuffix: IPermutationConstructor = PermutationHOF({
	generateUsernameModels: generateUsernameModelsFullNameModelYearSuffix,
	permutationTypeEnum: PermutationTypeEnum.FULL_NAME_MODEL,
});
