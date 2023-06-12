import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// Importando modulo de css
import buttonStyles from './button.module.css'

// Importando una imagen
import img from './uther.jpg'
// Estilos para la imagen
import imageStyles from './image.module.css'

// Importando json
import data from './data.json'
import {user} from './data.json'

// Importando typescript
import suma from './suma.ts'

// Importando modulos
const modules = import.meta.glob('./modules/*.js')

for (const path in modules) {
  modules[path] ().then((module) => {
    module.load()
  })
}

// Suma
console.log(`suma 2 + 3 = ${suma(2, 3)}`);

console.log(modules);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn">Click!</button>
    <img id="img" />
    
  </div>
`

// Json
// console.log(JSON.stringify(user));

// Estilo al nuevo botón
document.getElementById('btn').className = buttonStyles.btn

// Imagen
const imagen = document.getElementById('img')
imagen.src = img
imagen.className = imageStyles.img

setupCounter(document.querySelector('#counter'))
