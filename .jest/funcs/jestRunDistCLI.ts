import shelljs from 'shelljs';
import { assertCondition } from '@app/assertions';
import {
	IFuncJestRunDistCLI,
	IFuncJestRunDistCLIInput,
	IFuncJestRunDistCLIOutput,
} from '../interfaces';

/**
 * @public
 *
 * A custom Jest helper func that handles calls to the ./dist CLI.
 *
 * @param {IFuncJestRunDistCLIInput} args
 * @param {string} args.argument - The argument to be passes to the CLI
 * @param {string} args.command - Defaults to the 'generate' command.
 * @param {string} args.distCodePath - The path to the dist CLI code. Defaults to global.JEST_APP_DIST_CODE_PATH
 * @param {boolean} args.silent - Call 'shelljs.exec' is 'silent' mode or not.
 * @returns {IFuncJestRunDistCLIOutput} - { code, stderr, stdout }
 *
 * @throws When 'argument' is invalid
 * @throws When 'command' is invalid
 */
export const jestRunDistCLI: IFuncJestRunDistCLI = ({
	argument,
	command = 'generate',
	distCodePath = global.JEST_APP_DIST_CODE_PATH,
	silent = false,
}: IFuncJestRunDistCLIInput): IFuncJestRunDistCLIOutput => {
	assertCondition({
		condition: !!argument,
		errorMessage: "Invalid 'argument'",
	});

	assertCondition({
		condition: !!command,
		errorMessage: "Invalid 'command'",
	});

	const distCliCallToExec: string = `node ${distCodePath} ${command} '${argument}'`;
	const { code, stderr, stdout } = shelljs.exec(distCliCallToExec, { silent });

	return {
		code,
		stderr,
		stdout,
	};
};
