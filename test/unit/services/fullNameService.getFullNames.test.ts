import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonFullNameStr, ICommonPathStr } from '@app/interfaces/common';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';

describe('FullNameService', (): void => {
	describe('getFullNames', (): void => {
		describe('should return the expected array of fullNames', (): void => {
			test("when 'filePathService' has instantiated successfully", (): void => {
				/*
				 * Arrange: expected
				 */
				const fullNamesLengthExpected = 3;

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const delimiter: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;
				const filePathService: IServiceFilePath = FilePathService({ filePathStr, delimiter });
				const fullNamesService: IServiceFullNames = FullNamesService({ filePathService });

				/*
				 * Act
				 */
				const fullNamesFound: ICommonFullNameStr[] = fullNamesService.getFullNames();
				const fullNamesLengthFound: number = fullNamesFound.length;

				/*
				 * Assert
				 */
				expect(fullNamesLengthFound).toBe(fullNamesLengthExpected);
			});
		});
	});
});
