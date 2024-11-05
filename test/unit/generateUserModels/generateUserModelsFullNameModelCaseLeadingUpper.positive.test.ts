import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { generateUsernameModelsFullNameModelCaseLeadingUpper } from '@app/generateUserModels';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('generateUserModelsFullNameModelCaseUpper', (): void => {
	test("should return a 'usernameModel' with the expected 'username'", (): void => {
		/*
		 * Arrange: expected
		 */
		const usernameStrExpected: ICommonNameStr = 'Abc.Def';
		/*
		 * Arrange: common
		 */
		const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
		const fullNameStr: ICommonFullNameStr = 'abC,DEF';
		const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });

		/*
		 * Act
		 */
		const usernameModels: IModelUsername[] = generateUsernameModelsFullNameModelCaseLeadingUpper({
			fullNameOrUsernameModel: fullNameModel,
		});
		const usernameStrFound: ICommonNameStr = usernameModels[0].getUsername();

		/*
		 * Assert
		 */
		expect(usernameStrFound).toBe(usernameStrExpected);
	});
});
