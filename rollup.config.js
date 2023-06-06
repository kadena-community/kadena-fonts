import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import copy from 'rollup-plugin-copy'
import { uglify } from "rollup-plugin-uglify"

export default [
  {
    input: 'src/index.ts',
    plugins: [esbuild({
      minify: true,
      tsconfig: 'tsconfig.json',
    }), uglify()],
    output: [
      {
        file: './lib/index.min.js',
        format: 'es',
        sourcemap: false,
      },
    ],
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: './lib/index.d.ts',
      format: 'es',
    },
  },
  {
    input: 'lib/index.min.js',
    plugins: [
      copy({
        targets: [
          {
            src: [
              'src/fonts/**/*.ttf',
              'src/fonts/**/*.otf',
              'src/fonts/**/*.woff',
              'src/fonts/**/*.woff2',
            ],
            dest: 'lib',
          },
        ],
        flatten: false,
      })
    ],
  },
]
