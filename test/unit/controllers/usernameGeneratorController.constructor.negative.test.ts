import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { UsernameGeneratorController } from '@app/controllers';
import { ICommonPathStr } from '@app/interfaces/common';
import { resolve } from 'node:path';

describe('UsernameGeneratorController', (): void => {
	describe('constructor', (): void => {
		describe('should throw the expected error', (): void => {
			test("when 'filePathStr' is undefined", (): void => {
				/*
				 * Arrange: expected
				 */
				const errorExpected = "Invalid 'filePathStr'";

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = undefined;
				const fileServiceDelimiterEnum: FileServiceDelimiterEnum =
					FileServiceDelimiterEnum.NEW_LINE;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const handler = (): void => {
					UsernameGeneratorController({
						filePathStr,
						fileServiceDelimiterEnum,
						fullNameDelimiterEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when 'filePathStr' is an empty string", (): void => {
				/*
				 * Arrange: expected
				 */
				const errorExpected = "Invalid 'filePathStr'";

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = '';
				const fileServiceDelimiterEnum: FileServiceDelimiterEnum =
					FileServiceDelimiterEnum.NEW_LINE;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const handler = (): void => {
					UsernameGeneratorController({
						filePathStr,
						fileServiceDelimiterEnum,
						fullNameDelimiterEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when 'filePathStr' does not identify a file", (): void => {
				/*
				 * Arrange: expected
				 */
				const errorExpected = "Invalid 'filePathStr'";

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = CONSTS_PATHS_TEST_DIR;
				const fileServiceDelimiterEnum: FileServiceDelimiterEnum =
					FileServiceDelimiterEnum.NEW_LINE;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const handler = (): void => {
					UsernameGeneratorController({
						filePathStr,
						fileServiceDelimiterEnum,
						fullNameDelimiterEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when 'fileServiceDelimiterEnum' is null", (): void => {
				/*
				 * Arrange: expected
				 */
				const errorExpected = "Invalid 'delimiter'";

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const fileServiceDelimiterEnum: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NULL;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const handler = (): void => {
					UsernameGeneratorController({
						filePathStr,
						fileServiceDelimiterEnum,
						fullNameDelimiterEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
