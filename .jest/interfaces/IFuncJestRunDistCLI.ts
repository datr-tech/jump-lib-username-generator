import { IFuncJestRunDistCLIInput } from './IFuncJestRunDistCLIInput';
import { IFuncJestRunDistCLIOutput } from './IFuncJestRunDistCLIOutput';

export interface IFuncJestRunDistCLI {
	(args: IFuncJestRunDistCLIInput): IFuncJestRunDistCLIOutput;
}
