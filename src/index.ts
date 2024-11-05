import { writeFileSync } from 'node:fs';
import { CONSTS_PATHS_DATA_DIR } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum,FullNameDelimiterEnum } from '@app/config/enums';
import { UsernameGeneratorController } from '@app/controllers';
import { IControllerUsernameGenerator } from '@app/interfaces/controllers';
import { IModelUsername } from '@app/interfaces/models';
import { ICommonNameStr } from '@app/interfaces/common';

const filePathStr = `${CONSTS_PATHS_DATA_DIR}/fullNames.txt`;
const fileServiceDelimiterEnum: FileServiceDelimiterEnum = FileServiceDelimiterEnum.NEW_LINE;
const fullNameDelimiterEnum: FullNameDelimiterEnum = FullNameDelimiterEnum.COMMA;

const usernameGeneratorController: IControllerUsernameGenerator = UsernameGeneratorController({
	filePathStr,
	fileServiceDelimiterEnum,
	fullNameDelimiterEnum
});

const usernameModels: IModelUsername[] = usernameGeneratorController.generate();
const usernames: ICommonNameStr[] = usernameModels.map((usernameModel: IModelUsername): ICommonNameStr =>
	usernameModel.getUsername());

const outFilePathStr = `${CONSTS_PATHS_DATA_DIR}/fullNames.results.txt`;

writeFileSync(outFilePathStr, usernames.toString());