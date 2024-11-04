import { jestReadFileSync, jestRemoveFileSync, jestTouchFileSync } from './funcs';

global.jestReadFileSync = jestReadFileSync;
global.jestRemoveFileSync = jestRemoveFileSync;
global.jestTouchFileSync = jestTouchFileSync;
