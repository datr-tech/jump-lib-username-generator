import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel, UsernameModel } from '@app/models';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('UsernameModel', (): void => {
	describe('getSurname', (): void => {
		describe('should return the expected surname', (): void => {
			test("when receiving a 'fullNameModel'", (): void => {
				/*
				 * Arrange: expected
				 */
				const surnameExpected = 'TEST_SURNAME';
				/*
				 * Arrange: common
				 */
				const fullNameStr: ICommonFullNameStr = `forename,${surnameExpected}`;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
				const fullNameOrUsernameModel: IModelFullName = FullNameModel({
					fullNameStr,
					fullNameDelimiterEnum,
				});
				const usernameModel: IModelUsername = UsernameModel({ fullNameOrUsernameModel });

				/*
				 * Act
				 */
				const surnameFound: ICommonNameStr = usernameModel.getSurname();

				/*
				 * Assert
				 */
				expect(surnameFound).toBe(surnameExpected);
			});
		});
	});
});
