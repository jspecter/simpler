# simple js library for webgl syntax sugar.
---
**Getting Started**
---
    npm install simplerjs --save 

    yarn add simplerjs    
### API Reference
    import { getProgram } from 'simplerjs';

    const program = getProgram(gl,vertexSource,fragmentSource);
#### Parameter Description
  the getProgram function need three parameters.they are **gl** context for webgl,you can get it by:

    const gl = canvas.getContext('webgl');

  the second and third parameter are two script id of webgl shaders, just like:

    <script id="vertexShader" type="shader">
            attribute vec2 v_position;
            uniform vec2 v_resolution;
            varying vec4 v_color;

            void main(){
               vec2 one = v_position / v_resolution;
               vec2 two = one * 2.0;

               vec2 res = two - 1.0;

               gl_Position = vec4(res, 0, 1);
               v_color = vec4(one * 0.9, 0.5, 1);
            }
        </script>

        <script id="fragmentShader" type="shader">
            precision mediump float;
            varying vec4 v_color;

            void main(){
                gl_FragColor = v_color;
            }
        </script>

the second and third parameters are  **vertexShader** and **fragmentShader**. if everything is ok, a webgl program instance will be back.    

### Contributors

<a href="https://github.com/jspecter"><img style='border-radius:50%;max-width:40px;' src="https://avatars0.githubusercontent.com/u/25746681?s=60&v=4"></img></a>
    









