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

  the second and third parameter are two source text block of webgl shaders, **vertexShader**、**fragmentShader** respectively.

#### Contributors

<a href="https://github.com/jspecter"><img style='border-radius:50%;max-width:40px;' src="https://avatars0.githubusercontent.com/u/25746681?s=60&v=4"></img></a>
    









