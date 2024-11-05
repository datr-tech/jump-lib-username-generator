import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { PermutationFullNameModelFirstInitial } from '@app/permuatations';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';
import { IPermutation } from '@app/interfaces/permutations';

describe('permutationFullNameModelFirstInitial', (): void => {
	test("should return a 'usernameModel' with the expected 'username'", (): void => {
		/*
		 * Arrange: expected
		 */
		const usernameStrExpected: ICommonNameStr = 'a.def';

		/*
		 * Arrange: common
		 */
		const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
		const fullNameStr: ICommonFullNameStr = 'abc,def';
		const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });

		/*
		 * Act
		 */
		const permutation: IPermutation = PermutationFullNameModelFirstInitial({
			fullNameOrUsernameModel: fullNameModel,
		});
		const usernameModels: IModelUsername[] = permutation.generateUsernameModels();
		const usernameStrFound: ICommonNameStr = usernameModels[0].getUsername();

		/*
		 * Assert
		 */
		expect(usernameStrFound).toBe(usernameStrExpected);
	});
});
