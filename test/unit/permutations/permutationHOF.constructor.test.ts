import { FullNameDelimiterEnum, PermutationTypeEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { PermutationHOF } from '@app/permuatations';
import { ICommonFullNameStr } from '@app/interfaces/common';
import { IModelFullName } from '@app/interfaces/models';
import {
	IPermutation,
	IPermutationConstructor,
	IPermutationHOFFuncGenerateUsernameModels,
} from '@app/interfaces/permutations';
import { generateUsernameModelsMock } from '@test/doubles/mocks';

describe('PermutationHOF', (): void => {
	describe('constructor', (): void => {
		describe('should return a Permutation constructor (from which a permutation can be created)', (): void => {
			test('when receiving valid params', (): void => {
				/*
				 * Arrange
				 */
				const fullNameStr: ICommonFullNameStr = 'forename,surname';
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
				const generateUsernameModels: IPermutationHOFFuncGenerateUsernameModels =
					generateUsernameModelsMock;
				const permutationTypeEnum: PermutationTypeEnum = PermutationTypeEnum.FULL_NAME_MODEL;

				/*
				 * Act
				 */
				const PermutationConstructor: IPermutationConstructor = PermutationHOF({
					generateUsernameModels,
					permutationTypeEnum,
				});
				const fullNameOrUsernameModel: IModelFullName = FullNameModel({
					fullNameStr,
					fullNameDelimiterEnum,
				});
				const permutation: IPermutation = PermutationConstructor({ fullNameOrUsernameModel });

				/*
				 * Assert
				 */
				expect(permutation).toBeTruthy();
			});
		});
	});
});
