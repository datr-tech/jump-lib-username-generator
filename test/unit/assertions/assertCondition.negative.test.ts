import { assertCondition } from '@app/assertions';
import { ICommonBool, ICommonErrorMessageStr } from '@app/interfaces/common';

describe('assertConditionHelper', (): void => {
	describe('should throw the expected error', (): void => {
		test("when 'condition' is false and 'errorMessage' has not been received", (): void => {
			/*
			 * Arrange
			 */
			const condition: ICommonBool = false;
			const errorExpected = "Negative 'condition'";
			/*
			 * Act
			 */
			const handler = (): void => {
				assertCondition({ condition });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'condition' is false and 'errorMessage' has been received", (): void => {
			/*
			 * Arrange
			 */
			const condition: ICommonBool = false;
			const errorMessage = 'TEST_ERROR_MESSAGE';
			const errorExpected: ICommonErrorMessageStr = errorMessage;
			/*
			 * Act
			 */
			const handler = (): void => {
				assertCondition({ condition, errorMessage });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'condition' is false and 'errorMessage' has been received, but it is empty", (): void => {
			/*
			 * Arrange
			 */
			const condition: ICommonBool = false;
			const errorExpected = "Negative 'condition'";
			const errorMessage = ' ';
			/*
			 * Act
			 */
			const handler = (): void => {
				assertCondition({ condition, errorMessage });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
	});
});
