import { FullNameDelimiterEnum } from '@app/config/enums';
import { ICommonFullNameStr, ICommonNameStr } from '@app/interfaces/common';
import { IModelFullName } from '@app/interfaces/models';
import { FullNameModel } from '@app/models';

describe('FullNameModel', (): void => {
	describe('getSurname', (): void => {
		describe('should return the expected surname', (): void => {
			test('following a successful instantiation', (): void => {
				/*
				 * Arrange: expected
				 */
				const forenameExpected = 'forename';
				const surnameExpected = 'surname';

				/*
				 * Arrange: common
				 */
				const fullNameStr: ICommonFullNameStr = `${forenameExpected},${surnameExpected}`;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });
				const surnameFound: ICommonNameStr = fullNameModel.getSurname();

				/*
				 * Assert
				 */
				expect(surnameFound).toBe(surnameExpected);
			});
		});
	});
});
