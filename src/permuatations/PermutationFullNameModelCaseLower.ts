import { PermutationTypeEnum } from '@app/config/enums';
import { PermutationHOF } from '@app/permuatations/PermutationHOF';
import { generateUsernameModelsFullNameModelCaseLower } from '@app/generateUserModels';
import { IPermutationConstructor } from '@app/interfaces/permutations';

export const PermutationFullNameModelCaseLower: IPermutationConstructor = PermutationHOF({
	generateUsernameModels: generateUsernameModelsFullNameModelCaseLower,
	permutationTypeEnum: PermutationTypeEnum.FULL_NAME_MODEL,
});
