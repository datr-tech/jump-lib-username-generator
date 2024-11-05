import { FullNameDelimiterEnum } from '@app/config/enums';
import { FullNameModel, UsernameModel } from '@app/models';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName, IModelUsername } from '@app/interfaces/models';

describe('UsernameModel', (): void => {
	describe('getForename', (): void => {
		describe('should return the expected forename', (): void => {
			test("when receiving a 'fullNameModel'", (): void => {
				/*
				 * Arrange: expected
				 */
				const forenameExpected = 'TEST_FORENAME';
				/*
				 * Arrange: common
				 */
				const fullNameStr: ICommonFullNameStr = `${forenameExpected},surname`;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
				const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });
				const usernameModel: IModelUsername = UsernameModel({ fullNameModel });

				/*
				 * Act
				 */
				const forenameFound: ICommonNameStr = usernameModel.getForename();

				/*
				 * Assert
				 */
				expect(forenameFound).toBe(forenameExpected);
			});
		});
	});
});
