import { jestReadFileSync, jestRemoveFileSync, jestRunDistCLI, jestTouchFileSync } from './funcs';

global.jestReadFileSync = jestReadFileSync;
global.jestRemoveFileSync = jestRemoveFileSync;
global.jestRunDistCLI = jestRunDistCLI;
global.jestTouchFileSync = jestTouchFileSync;
