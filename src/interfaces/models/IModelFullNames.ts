import { IModelFullNamesFuncNext } from '@app/interfaces/models/IModelFullNamesFuncNext';
import { IModelFullNamesPropLength } from '@app/interfaces/models/IModelFullNamesPropLength';
import { IModelFullName } from '@app/interfaces/models/IModelFullName';

export interface IModelFullNames extends Iterator<IModelFullName> {
	length: IModelFullNamesPropLength;
	next: IModelFullNamesFuncNext;
}
