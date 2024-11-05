import { PermutationTypeEnum } from '@app/config/enums';
import { PermutationHOF } from '@app/permuatations/PermutationHOF';
import { generateUsernameModelsFullNameModelFirstInitial } from '@app/permuatations/generateUserModels';
import { IPermutationConstructor } from '@app/interfaces/permutations';

export const PermutationFullNameModelFirstInitial: IPermutationConstructor = PermutationHOF({
	generateUsernameModels: generateUsernameModelsFullNameModelFirstInitial,
	permutationTypeEnum: PermutationTypeEnum.FULL_NAME_MODEL,
});
