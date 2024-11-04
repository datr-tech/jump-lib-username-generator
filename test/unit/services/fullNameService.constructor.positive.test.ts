import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';

describe('FullNameService', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a valid 'filePathService'", (): void => {
				/*
				 * Arrange
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;
				const filePathService: IServiceFilePath = FilePathService({ filePathStr, delimiter });

				/*
				 * Act
				 */
				const fullNamesService: IServiceFullNames = FullNamesService({ filePathService });

				/*
				 * Assert
				 */
				expect(fullNamesService).toBeTruthy();
			});
		});
	});
});
