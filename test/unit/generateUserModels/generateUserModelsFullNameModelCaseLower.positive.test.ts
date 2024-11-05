import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { generateUsernameModelsFullNameModelCaseLower } from '@app/generateUserModels';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('generateUserModelsFullNameModelCaseLower', (): void => {
	test("should return a 'usernameModel' with the expected 'username'", (): void => {
		/*
		 * Arrange: expected
		 */
		const usernameStrExpected: ICommonNameStr = 'abc.def';
		/*
		 * Arrange: common
		 */
		const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
		const fullNameStr: ICommonFullNameStr = 'abc,DEF';
		const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });

		/*
		 * Act
		 */
		const usernameModels: IModelUsername[] = generateUsernameModelsFullNameModelCaseLower({
			fullNameOrUsernameModel: fullNameModel,
		});
		const usernameStrFound: ICommonNameStr = usernameModels[0].getUsername();

		/*
		 * Assert
		 */
		expect(usernameStrFound).toBe(usernameStrExpected);
	});
});
