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
	describe('getPermutationType', (): void => {
		test('should return the expected type', (): void => {
			/*
			 * Arrange: expected
			 */
			const permutationTypeEnumExpected: PermutationTypeEnum = PermutationTypeEnum.FULL_NAME_MODEL;

			/*
			 * Arrange: mock
			 */
			const generateUsernameModels: IPermutationHOFFuncGenerateUsernameModels =
				generateUsernameModelsMock;

			/*
			 * Arrange: fullNameOrUsernameModel
			 */
			const fullNameStr: ICommonFullNameStr = 'forename,surname';
			const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
			const fullNameOrUsernameModel: IModelFullName = FullNameModel({
				fullNameStr,
				fullNameDelimiterEnum,
			});

			/*
			 * Arrange: PermutationConstructor
			 */
			const PermutationConstructor: IPermutationConstructor = PermutationHOF({
				generateUsernameModels,
				permutationTypeEnum: permutationTypeEnumExpected,
			});

			/*
			 * Act
			 */
			const permutation: IPermutation = PermutationConstructor({ fullNameOrUsernameModel });
			const permutationTypeEnumFound: PermutationTypeEnum = permutation.getPermutationType();

			/*
			 * Assert
			 */
			expect(permutationTypeEnumFound).toBe(permutationTypeEnumExpected);
		});
	});
});
