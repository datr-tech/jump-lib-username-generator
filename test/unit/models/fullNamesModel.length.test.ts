import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { FullNamesModel } from '@app/models';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IModelFullNames } from '@app/interfaces/models';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';

describe('FullNamesModel', (): void => {
	describe('length', (): void => {
		describe('should return the expected number of child models', (): void => {
			test("when 'FullNamesModel' has instantiated successfully", (): void => {
				/*
				 * Arrange: expected
				 */
				const lengthExpected = 3;

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
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const fullNamesModel: IModelFullNames = FullNamesModel({
					fullNamesService,
					fullNameDelimiterEnum,
				});
				const lengthFound: number = fullNamesModel.length;

				/*
				 * Assert
				 */
				expect(lengthFound).toBe(lengthExpected);
			});
		});
	});
});
