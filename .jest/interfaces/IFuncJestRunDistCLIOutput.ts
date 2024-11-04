import { ICommonCodeStr } from '@app/interfaces/common';

export interface IFuncJestRunDistCLIOutput {
	code: number;
	stderr: ICommonCodeStr;
	stdout: ICommonCodeStr;
}
