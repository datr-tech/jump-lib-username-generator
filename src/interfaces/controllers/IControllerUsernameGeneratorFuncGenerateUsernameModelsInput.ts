import { IModelFullName, IModelUsername } from '@app/interfaces/models';
import { IPermutationConstructor } from '@app/interfaces/permutations';

export interface IControllerUsernameGeneratorFuncGenerateUsernameModelsInput {
	fullNameOrUsernameModel: IModelFullName | IModelUsername;
	permutationConstructorsArr: IPermutationConstructor[];
}
