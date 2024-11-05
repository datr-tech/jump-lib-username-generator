import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel } from '@app/models';
import { generateUsernameModelsFullNameModelYearSuffix } from '@app/generateUserModels';
import { ICommonFullNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('generateUserModelsFullNameModelYearSuffix', (): void => {
	test("should return an array of 'usernameModel' with the expected length", (): void => {
		/*
		 * Arrange: expected
		 */
		const usernameModelsLengthExpected = 225;
		/*
		 * Arrange: common
		 */
		const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
		const fullNameStr: ICommonFullNameStr = 'abc,def';
		const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });

		/*
		 * Act
		 */
		const usernameModels: IModelUsername[] = generateUsernameModelsFullNameModelYearSuffix({
			fullNameOrUsernameModel: fullNameModel,
		});
		const usernameModelsLengthFound: number = usernameModels.length;

		/*
		 * Assert
		 */
		expect(usernameModelsLengthFound).toBe(usernameModelsLengthExpected);
	});
});
