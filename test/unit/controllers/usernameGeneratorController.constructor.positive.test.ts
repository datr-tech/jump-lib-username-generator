import { resolve } from 'node:path';
import { FileServiceDelimiterEnum, FullNameDelimiterEnum } from '@app/config/enums';
import { UsernameGeneratorController } from '@app/controllers';
import { IControllerUsernameGenerator } from '@app/interfaces/controllers';
import { ICommonPathStr } from '@app/interfaces/common';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';

describe('UsernameGeneratorController', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test('when receiving a valid set of params', (): void => {
				/*
				 * Arrange
				 */
				const filePathStr: ICommonPathStr = resolve(
					`${CONSTS_PATHS_TEST_DIR}`,
					'./doubles/fakes/data/fullNames.txt',
				);
				const fileServiceDelimiterEnum: FileServiceDelimiterEnum =
					FileServiceDelimiterEnum.NEW_LINE;
				const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

				/*
				 * Act
				 */
				const usernameGeneratorController: IControllerUsernameGenerator =
					UsernameGeneratorController({
						filePathStr,
						fileServiceDelimiterEnum,
						fullNameDelimiterEnum,
					});

				/*
				 * Assert
				 */
				expect(usernameGeneratorController).toBeTruthy();
			});
		});
	});
});
