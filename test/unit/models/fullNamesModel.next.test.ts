import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { FullNamesModel } from '@app/models';
import { FilePathService, FullNamesService } from '@app/services';
import { ICommonNameStr, ICommonPathStr } from '@app/interfaces/common';
import { IModelFullNames, IModelFullNamesFuncNextOutput } from '@app/interfaces/models';
import { IServiceFilePath, IServiceFullNames } from '@app/interfaces/services';

describe('FullNamesModel', (): void => {
	describe('next', (): void => {
		describe('should enable iteration across the child models', (): void => {
			test("when 'FullNamesModel' has instantiated successfully", (): void => {
				/*
				 * Arrange: expected
				 */
				const forenamesExpected: ICommonNameStr[] = ['jim', 'jane', 'harold'];
				const surnamesExpected: ICommonNameStr[] = ['strachan', 'smith', 'james'];

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
				const fullNamesModel: IModelFullNames = FullNamesModel({
					fullNamesService,
					fullNameDelimiterEnum,
				});

				/*
				 * Act
				 */
				let count: number = 0;
				let fullNameModelWrapper: IModelFullNamesFuncNextOutput = fullNamesModel.next();
				while (!fullNameModelWrapper.done) {
					/*
					 * Assert
					 */
					expect(fullNameModelWrapper.value.getForename()).toBe(forenamesExpected[count]);
					expect(fullNameModelWrapper.value.getSurname()).toBe(surnamesExpected[count]);
					count++;
					fullNameModelWrapper = fullNamesModel.next();
				}
			});
		});
	});
});
