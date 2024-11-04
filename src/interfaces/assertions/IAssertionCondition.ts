import { IAssertionConditionInput } from './IAssertionConditionInput';

export interface IAssertionCondition {
	(args: IAssertionConditionInput): void;
}
