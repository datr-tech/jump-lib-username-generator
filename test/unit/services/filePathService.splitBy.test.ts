import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { FilePathService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IServiceFilePath } from '@app/interfaces/services';

describe('FullPathService', (): void => {
	describe('splitBy', (): void => {
		describe('should return the expected delimiter', (): void => {
			test('when the service has instantiated successfully', (): void => {
				/*
				 * Arrange: expected
				 */
				const delimiterExpected: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;

				/*
				 * Arrange: common
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
					delimiter: delimiterExpected,
				});
				const delimiterFound: FileServiceDelimiterEnum = filePathService.splitBy();

				/*
				 * Assert
				 */
				expect(delimiterFound).toBe(delimiterExpected);
			});
		});
	});
});
