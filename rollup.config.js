import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        external(),
        resolve(), // Locate modules using the Node resolution algorithm, for using third party modules in node_modules.
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        commonjs(), // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle.
    ],
}
