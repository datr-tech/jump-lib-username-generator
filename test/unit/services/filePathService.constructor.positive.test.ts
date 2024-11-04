import { existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { FilePathService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IServiceFilePath } from '@app/interfaces/services';

describe('FullPathService', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving valid versions of the 'filePathStr' and 'delimiter' params", (): void => {
				/*
				 * Arrange
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;

				/*
				 * Act
				 */
				const filePathService: IServiceFilePath = FilePathService({ filePathStr, delimiter });

				/*
				 * Assert
				 */
				expect(filePathService).toBeTruthy();
			});
			test("when receiving the optional 'fn' params", (): void => {
				/*
				 * Arrange
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;

				/*
				 * Act
				 */
				const filePathService: IServiceFilePath = FilePathService({
					filePathStr,
					delimiter,
					existsFn: existsSync,
					statFn: statSync,
				});

				/*
				 * Assert
				 */
				expect(filePathService).toBeTruthy();
			});
			test("when using the default 'delimiter'", (): void => {
				/*
				 * Arrange
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);

				/*
				 * Act
				 */
				const filePathService: IServiceFilePath = FilePathService({
					filePathStr,
				});

				/*
				 * Assert
				 */
				expect(filePathService).toBeTruthy();
			});
		});
	});
});
