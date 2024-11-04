import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { FileServiceDelimiterEnum } from '@app/config/enums';
import { IFixtureFilePathServiceNegative } from '@test/interfaces/fixtures/services';

export const filePathServiceNegativeFixture: IFixtureFilePathServiceNegative[] = [
	{
		description: "when 'filePathStr' is undefined",
		errorExpected: "Invalid 'filePathStr'",
		fileServiceDelimiterEnum: FileServiceDelimiterEnum.NEW_LINE,
		filePathStr: undefined,
	},
	{
		description: "when 'filePathStr' is an empty string",
		errorExpected: "Invalid 'filePathStr'",
		fileServiceDelimiterEnum: FileServiceDelimiterEnum.NEW_LINE,
		filePathStr: '',
	},
	{
		description: "when 'filePathStr' is valid, but does not represent a file object",
		errorExpected: "Invalid 'filePathStr'",
		fileServiceDelimiterEnum: FileServiceDelimiterEnum.NEW_LINE,
		filePathStr: `${Date.now()}`,
	},
	{
		description: "when 'filePathStr' is valid, but represents a dir",
		errorExpected: "Invalid 'filePathStr'",
		fileServiceDelimiterEnum: FileServiceDelimiterEnum.NEW_LINE,
		filePathStr: CONSTS_PATHS_APP_ROOT,
	},
];
