import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { generateUsernameModelsFullNameModelFirstInitial } from '@app/permuatations/generateUserModels';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('generateUserModelsFullNameModelFirstInitial', (): void => {
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
		const usernameModels: IModelUsername[] = generateUsernameModelsFullNameModelFirstInitial({
			fullNameOrUsernameModel: fullNameModel,
		});
		const usernameStrFound: ICommonNameStr = usernameModels[0].getUsername();

		/*
		 * Assert
		 */
		expect(usernameStrFound).toBe(usernameStrExpected);
	});
});
