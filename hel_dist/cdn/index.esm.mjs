import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/
const LIB_NAME = 'libs-utils';

const lib = exposeLib(LIB_NAME);
// 支持写法：import { regs, num, myMod } from '@melt-js/libs-utils'
const { regs, num, myMod } = lib;

export { lib as default, lib, myMod, num, regs };
