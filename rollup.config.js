import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'components/index.tsx',
    output: [
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'yck-design'
      },
      {
        file: 'dist/index.es.js',
        format: 'es'
      }
    ],
    plugins: [
      external(),
      postcss({
        modules: false,
        extract: true
      }),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true
      }),
      commonjs()
    ]
  },
  {
    input: 'components/index.tsx',
    output: [
      {
        file: 'dist/index.umd.min.js',
        format: 'umd',
        name: 'yck-design'
      }
    ],
    plugins: [
      external(),
      postcss({
        modules: false,
        extract: true,
        minimize: true
      }),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true
      }),
      commonjs(),
      uglify()
    ]
  }
]
