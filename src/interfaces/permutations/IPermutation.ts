import { IPermutationFuncGetPermutationType } from './IPermutationFuncGetPermutationType';
import { IPermutationHOFFuncGenerateUsernameModelsOutput } from './IPermutationHOFFuncGenerateUsernameModelsOutput';

export interface IPermutation {
	generateUsernameModels: () => IPermutationHOFFuncGenerateUsernameModelsOutput;
	getPermutationType: IPermutationFuncGetPermutationType;
}
