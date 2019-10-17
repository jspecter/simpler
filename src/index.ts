'use strict';

import { createShader, createProgram } from './util';

const getProgram = function(gl, vertexId, fragmentId) {
    const vertexSource = document.querySelector(`#${vertexId}`).textContent;
    const fragmentSource = document.querySelector(`#${fragmentId}`).textContent;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

    if (!vertexShader || !fragmentShader) {
        throw new Error('some errors occurred when create shader');
    }

    const program = createProgram(gl, vertexShader, fragmentShader);

    if (!program) {
        throw new Error('some errors occurred when create program');
    }

    return program;
};

export { getProgram };
