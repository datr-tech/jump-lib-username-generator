import { FullNameDelimiterEnum, PermutationTypeEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { PermutationHOF } from '@app/permuatations';
import { ICommonFullNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';
import {
	IPermutation,
	IPermutationConstructor,
	IPermutationHOFFuncGenerateUsernameModels,
} from '@app/interfaces/permutations';
import { generateUsernameModelsMock } from '@test/doubles/mocks';

describe('PermutationHOF', (): void => {
	describe('generateUsernameModels', (): void => {
		describe('should return the same positive number of usernameModels', (): void => {
			test("as retrieved from 'generateUsernameModelsMock'", (): void => {
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
				const permutationTypeEnum: PermutationTypeEnum = PermutationTypeEnum.FULL_NAME_MODEL;
				const PermutationConstructor: IPermutationConstructor = PermutationHOF({
					generateUsernameModels,
					permutationTypeEnum,
				});

				/*
				 * Act
				 */
				const permutation: IPermutation = PermutationConstructor({ fullNameOrUsernameModel });
				const usernameModelsFound: IModelUsername[] = permutation.generateUsernameModels();
				const usernameModelsExpected: IModelUsername[] = generateUsernameModelsMock({
					fullNameOrUsernameModel,
				});

				/*
				 * Assert
				 */
				expect(usernameModelsFound.length).toBeTruthy();
				expect(usernameModelsExpected.length).toBeTruthy();
				expect(usernameModelsFound.length).toBe(usernameModelsExpected.length);
			});
		});
	});
});
