import { IServiceFilePathFuncGetFilePath } from './IServiceFilePathFuncGetFilePath';
import { IServiceFilePathFuncSplitBy } from './IServiceFilePathFuncSplitBy';

export interface IServiceFilePath {
	getFilePath: IServiceFilePathFuncGetFilePath;
	splitBy: IServiceFilePathFuncSplitBy;
}
