import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path'

export default defineConfig((command, mode) => {
  const port = 3000
  
  console.log(command, mode);
  const env = loadEnv(mode, process.cwd())

  console.log(env);
  console.log(env.VITE_NAME);

  // if (mode === 'development') {
  //   return {
  //     server: {
  //       port
  //     }
  //   }
  // } else {
  //   return {
  //     build: {
  //       rollupOptions: {
  //         input: {
  //           main: resolve(__dirname, 'index.html'),
  //           help: resolve(__dirname, 'help', 'help.html')
  //         }
  //       }
  //     }
  //   }
  // }

  // Configuración para librerías - npm run build
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'lib', 'main.js'),
        name: 'demo',
        filename: (format) => {
          return `demo.${format}.js`
        }
      }
    }
  }
})