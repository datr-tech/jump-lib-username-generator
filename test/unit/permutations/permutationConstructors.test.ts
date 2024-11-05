import { permutationConstructors } from '@app/permuatations';
import { IPermutationConstructorsOutput } from '@app/interfaces/permutations';

describe('permutationsConstructors', (): void => {
	test("should return a array of 'permutationConstructors'", (): void => {
		/*
		 * Arrange: expected
		 */
		const permutationConstructorsLengthExpected = 4;

		/*
		 * Act
		 */
		const permutationConstructorsArr: IPermutationConstructorsOutput = permutationConstructors();
		const permutationConstructorsLengthFound: number = permutationConstructorsArr.length;
		/*
		 * Assert
		 */
		expect(permutationConstructorsLengthFound).toBe(permutationConstructorsLengthExpected);
	});
});
