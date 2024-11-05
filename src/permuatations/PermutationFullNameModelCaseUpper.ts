import { PermutationTypeEnum } from '@app/config/enums';
import { PermutationHOF } from '@app/permuatations/PermutationHOF';
import { generateUsernameModelsFullNameModelCaseUpper } from '@app/generateUserModels';
import { IPermutationConstructor } from '@app/interfaces/permutations';

export const PermutationFullNameModelCaseUpper: IPermutationConstructor = PermutationHOF({
	generateUsernameModels: generateUsernameModelsFullNameModelCaseUpper,
	permutationTypeEnum: PermutationTypeEnum.FULL_NAME_MODEL,
});
