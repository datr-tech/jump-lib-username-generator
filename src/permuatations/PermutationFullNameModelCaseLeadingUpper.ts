import { PermutationTypeEnum } from '@app/config/enums';
import { PermutationHOF } from '@app/permuatations/PermutationHOF';
import { generateUsernameModelsFullNameModelCaseLeadingUpper } from '@app/generateUserModels';
import { IPermutationConstructor } from '@app/interfaces/permutations';

export const PermutationFullNameModelCaseLeadingUpper: IPermutationConstructor = PermutationHOF({
	generateUsernameModels: generateUsernameModelsFullNameModelCaseLeadingUpper,
	permutationTypeEnum: PermutationTypeEnum.FULL_NAME_MODEL,
});
