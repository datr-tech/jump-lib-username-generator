import { CONSTS_ERRORS_CONDITION_MESSAGE_DEFAULT } from '@app/config/consts/errors';
import { IAssertionCondition, IAssertionConditionInput } from '@app/interfaces/assertions';
import { ICommonErrorMessageStr } from '@app/interfaces/common';

/**
 * @public
 *
 * An assertion function that throws an error when the value of the received
 * 'condition' param is false. Throws errors will make use of the 'errorMessage'
 * param, whose value defaults to CONSTS_ERRORS_CONDITION_MESSAGE_DEFAULT.
 *
 * When an error is not thrown - that is, when the value of the 'condition' param is
 * true - the assertion function will return undefined.
 *
 * @param {IAssertionConditionInput} args
 * @param {ICommonBool} args.condition - The 'condition' to assert
 * @param {ICommonErrorMessageStr} args.errorMessage - The 'errorMessage' to throw
 * @throws When 'condition' is false.
 */
export const assertCondition: IAssertionCondition = ({
	condition,
	errorMessage = CONSTS_ERRORS_CONDITION_MESSAGE_DEFAULT,
}: IAssertionConditionInput): void => {
	if (condition === true) {
		return;
	}

	const errorMessageTrimmed: ICommonErrorMessageStr = errorMessage.trim();
	const errorMessageResolved: ICommonErrorMessageStr = errorMessageTrimmed
		? errorMessageTrimmed
		: CONSTS_ERRORS_CONDITION_MESSAGE_DEFAULT;

	throw new Error(errorMessageResolved);
};
