import { resolve } from 'node:path';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { UsernameGeneratorController } from '@app/controllers';
import { IControllerUsernameGenerator } from '@app/interfaces/controllers';
import { ICommonPathStr } from '@app/interfaces/common';
import { IModelUsername } from '@app/interfaces/models';

describe('UsernameGeneratorController', (): void => {
	describe('generate', (): void => {
		describe("should return the expected number of 'usernameModels'", (): void => {
			test('when receiving a valid set of params', (): void => {
				/*
				 * Arrange: expected
				 */
				const usernameModelsLengthExpected = 48;

				/*
				 * Arrange: common
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const fileServiceDelimiterEnum: FileServiceDelimiterEnum =
					FileServiceDelimiterEnum.NEW_LINE;

				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;
				const usernameGeneratorController: IControllerUsernameGenerator =
					UsernameGeneratorController({
						filePathStr,
						fileServiceDelimiterEnum,
						fullNameDelimiterEnum,
					});

				/*
				 * Act
				 */
				const usernameModels: IModelUsername[] = usernameGeneratorController.generate();
				const usernameModelsLengthFound: number = usernameModels.length;

				/*
				 * Assert
				 */
				expect(usernameModelsLengthFound).toBe(usernameModelsLengthExpected);
			});
		});
	});
});
