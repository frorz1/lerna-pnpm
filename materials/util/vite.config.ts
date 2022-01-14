import { defineConfig } from 'vite'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'index', // 起个名字，安装、引入用
      fileName: (format) =>`index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      plugins: [
        typescript(),
        resolve(), 
        babel({ 
          babelrc: false,
          babelHelpers: 'runtime',
          extensions: ['.ts'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  ie: 11,
                  browsers: 'last 2 versions'
                },
                useBuiltIns: 'usage',
                corejs: 3
              }
            ]
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                corejs: 3
              }
            ]
          ]
        }
      )]
    }
  }
})
