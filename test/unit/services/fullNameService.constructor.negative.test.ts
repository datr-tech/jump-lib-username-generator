import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IServiceFilePath } from '@app/interfaces/services';

describe('FullNameService', (): void => {
	describe('constructor', (): void => {
		describe('should throw an error', (): void => {
			test("when receiving a 'filePathService' with a 'NULL' delimiter", (): void => {
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
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NULL;
				const filePathService: IServiceFilePath = FilePathService({ filePathStr, delimiter });

				/*
				 * Act
				 */
				const handler = (): void => {
					FullNamesService({ filePathService });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when receiving a 'filePathService' that represents an empty file", (): void => {
				/*
				 * Arrange: expected
				 */
				const errorExpected = "Invalid 'fileContents'";

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/empty.txt',
				);
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;
				const filePathService: IServiceFilePath = FilePathService({ filePathStr, delimiter });

				/*
				 * Act
				 */
				const handler = (): void => {
					FullNamesService({ filePathService });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
