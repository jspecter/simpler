const config = require('./rollup.config');
const rollup = require('rollup');

const options = config('simpler', 'esm');

(async function build() {
    const bundle = await rollup.rollup(options.input);
    await bundle.write(options.output);
})();

