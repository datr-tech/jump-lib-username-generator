import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { FilePathService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IServiceFilePath } from '@app/interfaces/services';

describe('FullPathService', (): void => {
	describe('getFilePath', (): void => {
		describe('should return the expected file path', (): void => {
			test('when the service has instantiated successfully', (): void => {
				/*
				 * Arrange: expected
				 */
				const filePathStrExpected: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);

				/*
				 * Arrange: common
				 */
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;

				/*
				 * Act
				 */
				const filePathService: IServiceFilePath = FilePathService({
					filePathStr: filePathStrExpected,
					delimiter,
				});
				const filePathStrFound: ICommonPathStr = filePathService.getFilePath();

				/*
				 * Assert
				 */
				expect(filePathStrFound).toBe(filePathStrExpected);
			});
		});
	});
});
