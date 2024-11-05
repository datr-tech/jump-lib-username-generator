import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel, UsernameModel } from '@app/models';
import { ICommonFullNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('UsernameModel', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a 'fullNameModel'", (): void => {
				/*
				 * Arrange
				 */
				const fullNameStr: ICommonFullNameStr = 'forename,surname';
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
				const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });

				/*
				 * Act
				 */
				const usernameModel: IModelUsername = UsernameModel({ fullNameModel });

				/*
				 * Assert
				 */
				expect(usernameModel).toBeTruthy();
			});
		});
	});
});
