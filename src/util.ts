export function createShader(gl, type: string, source: string): object {
    const shader: object = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let success: boolean = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success) {
        return shader;
    }

    let errMsg:string = gl.getShaderInfoLog(shader);
    
    if(errMsg){
        throw errMsg;
    }
    gl.deleteShader(shader);
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

    let success: boolean = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }

    let errMsg:string = gl.getProgramInfoLog(program);
    
    if(errMsg){
        throw errMsg;
    }

    gl.deleteProgram(program);
}
