import { assertCondition } from '@app/assertions';
import { ICommonBool } from '@app/interfaces/common';

describe('assertConditionHelper', (): void => {
	describe('should return undefined', (): void => {
		test("when 'condition' is true", (): void => {
			/*
			 * Arrange
			 */
			const condition: ICommonBool = true;

			/*
			 * Act
			 */
			const response = assertCondition({ condition });

			/*
			 * Assert
			 */
			expect(response).toBeUndefined();
		});
	});
});
