import { jestAppRootDir, jestAppDistCodePath, jestAppDistDir, jestAppTestDir } from './paths';

global.JEST_APP_ROOT_DIR = jestAppRootDir;
global.JEST_APP_DIST_DIR = jestAppDistDir;
global.JEST_APP_TEST_DIR = jestAppTestDir;
global.JEST_APP_DIST_CODE_PATH = jestAppDistCodePath;
