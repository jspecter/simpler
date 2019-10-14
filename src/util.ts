export function createShader(gl, type: string, source: string): object {
    const shader: object = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let success: boolean = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success) {
        return shader;
    }

    gl.deleteShader(shader);
    throw new Error(this.getShaderLogInfo());
}

export function createProgram(
    gl,
    vertexShader: object,
    fragmentShader: object
): object {
    const program: object = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    let success: boolean = this.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }

    gl.deleteProgram(program);
    throw new Error(this.getProgramLogInfo());
}
