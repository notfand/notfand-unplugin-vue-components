import * as rollup from 'rollup';
import { Options } from './types.cjs';
import '@rollup/pluginutils';
import 'unplugin';
import '@antfu/utils';

declare const _default: (options: Options) => rollup.Plugin<any> | rollup.Plugin<any>[];

export { _default as default };