import { FullNameModel } from '@app/models';
import { fullNameModelNegativeFixture } from '@test/fixtures/models';
import { IFixtureFullNameModelNegative } from '@test/interfaces/fixtures/models';

describe('FullNameModel', (): void => {
	describe('constructor', (): void => {
		describe("should throw 'errorExpected'", (): void => {
			test.each(fullNameModelNegativeFixture)(
				"when 'fullNameStr' is $fullNameStr and 'fullNameDelimiterEnum' is $fullNameDelimiterEnum",
				({
					errorExpected,
					fullNameDelimiterEnum,
					fullNameStr,
				}: IFixtureFullNameModelNegative): void => {
					/*
					 * Act
					 */
					const handler = (): void => {
						FullNameModel({ fullNameStr, fullNameDelimiterEnum });
					};

					/*
					 * Assert
					 */
					expect(handler).toThrow(errorExpected);
				},
			);
		});
	});
});
