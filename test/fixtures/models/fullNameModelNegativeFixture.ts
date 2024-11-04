import { FullNameDelimiterEnum } from '@app/config/enums';
import { IFixtureFullNameModelNegative } from '@test/interfaces/fixtures/models';

export const fullNameModelNegativeFixture: IFixtureFullNameModelNegative[] = [
	{
		description: "when 'fullNameStr' is undefined",
		errorExpected: "Invalid 'fullNameStr'",
		fullNameDelimiterEnum: FullNameDelimiterEnum.COMMA,
		fullNameStr: undefined,
	},
	{
		description: "when 'fullNameStr' is an empty string",
		errorExpected: "Invalid 'fullNameStr'",
		fullNameDelimiterEnum: FullNameDelimiterEnum.COMMA,
		fullNameStr: '',
	},
	{
		description: "when 'fullNameStr' is an empty string with a positive length",
		errorExpected: "Invalid 'fullNameStrTrimmed'",
		fullNameDelimiterEnum: FullNameDelimiterEnum.COMMA,
		fullNameStr: '  ',
	},
	{
		description: "when 'fullNameStr' is a single word",
		errorExpected: "Invalid 'fullNameArr'",
		fullNameDelimiterEnum: FullNameDelimiterEnum.COMMA,
		fullNameStr: 'forename',
	},
	{
		description: "when the forename component of 'fullNameStr' is empty",
		errorExpected: "Invalid 'forename'",
		fullNameDelimiterEnum: FullNameDelimiterEnum.COMMA,
		fullNameStr: ',surname',
	},
	{
		description: "when the surname component of 'fullNameStr' is empty",
		errorExpected: "Invalid 'surname'",
		fullNameDelimiterEnum: FullNameDelimiterEnum.COMMA,
		fullNameStr: 'forename,',
	},
];
