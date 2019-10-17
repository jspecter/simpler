const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');
const { DEFAULT_EXTENSIONS } = require('@babel/core');
const { terser } = require('rollup-plugin-terser');
const { uglify } = require('rollup-plugin-uglify');

module.exports = (name, module) => {
    let plugins = [
        typescript({
            tsconfig: 'tsconfig.json'
        })
    ];

    if (module === 'esm') {
        plugins = [...plugins, terser()];
    } else {
        plugins = [
            ...plugins,
            babel({
                babelrc: true,
                exclude: 'node_modules/**',
                // extend ts & tsx extensions to babel
                extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
            }),
            uglify()
        ];
    }

    return {
        input: {
            input: './src/index.ts',
            external: ['simplerjs'],
            plugins
        },
        output: {
            name,
            file: 'simpler.min.js',
            format: module,
            compact: true,
            globals: {
                simplerjs: 'simplerjs'
            }
        }
    };
};
