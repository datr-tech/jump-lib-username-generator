import { FullNameDelimiterEnum } from '@app/config/enums';
import { ICommonFullNameStr } from '@app/interfaces/common';
import { IModelFullName } from '@app/interfaces/models';
import { FullNameModel } from '@app/models';

describe('FullNameModel', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test('when receiving valid params', (): void => {
				/*
				 * Arrange
				 */
				const fullNameStr: ICommonFullNameStr = 'forename,surname';
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const fullNameModel: IModelFullName = FullNameModel({ fullNameStr, fullNameDelimiterEnum });

				/*
				 * Assert
				 */
				expect(fullNameModel).toBeTruthy();
			});
		});
	});
});
