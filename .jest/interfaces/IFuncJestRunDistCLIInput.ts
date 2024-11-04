import {
	ICommonBool,
	ICommonCodeStr,
	ICommonNameStr,
	ICommonPathStr,
} from '@app/interfaces/common';

export interface IFuncJestRunDistCLIInput {
	argument: ICommonCodeStr;
	command?: ICommonNameStr;
	distCodePath?: ICommonPathStr;
	silent?: ICommonBool;
}
