(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["libs-utils"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json/appGroupName
	|
	|--------------------------------------------------------------------------
	*/
	const LIB_NAME = 'libs-utils';

	const lib = helLibProxy.exposeLib(LIB_NAME);
	// 支持写法：import { regs, num, myMod } from '@melt-js/libs-utils'
	const { regs, num, myMod } = lib;

	exports.default = lib;
	exports.lib = lib;
	exports.myMod = myMod;
	exports.num = num;
	exports.regs = regs;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
