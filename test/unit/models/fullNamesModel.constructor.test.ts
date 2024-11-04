import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { FullNamesModel } from '@app/models';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonPathStr } from '@app/interfaces/common';
import { IModelFullNames } from '@app/interfaces/models';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';

describe('FullNamesModel', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a valid 'fileNamesService'", (): void => {
				/*
				 * Arrange
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

				/*
				 * Assert
				 */
				expect(fullNamesModel).toBeTruthy();
			});
		});
	});
});
