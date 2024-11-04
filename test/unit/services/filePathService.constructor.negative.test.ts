import { FilePathService } from '@app/services';
import { filePathServiceNegativeFixture } from '@test/fixtures/services';
import { IFixtureFilePathServiceNegative } from '@test/interfaces/fixtures/services';

describe('FilePathService', (): void => {
	describe('constructor', (): void => {
		describe("should throw 'errorExpected'", (): void => {
			test.each(filePathServiceNegativeFixture)(
				"when 'filePathStr' is $filePathStr and 'fileServiceDelimiterEnum' is $fileServiceDelimiterEnum",
				({
					errorExpected,
					filePathStr,
					fileServiceDelimiterEnum,
				}: IFixtureFilePathServiceNegative): void => {
					/*
					 * Act
					 */
					const handler = (): void => {
						FilePathService({ filePathStr, delimiter: fileServiceDelimiterEnum });
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
