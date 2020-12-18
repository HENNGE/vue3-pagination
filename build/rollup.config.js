import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import svg from 'rollup-plugin-svg';
import path from 'path';

export default [
  {
    output: {
      format: 'esm',
      file: 'dist/vue3-pagination.esm.js',
    },
    plugins: [
      typescript(),
      vue({ css: false }),
      svg(),
      scss({
        extract: path.resolve('dist', 'vue3-pagination.css'),
      }),
    ],
  },
  {
    output: {
      format: 'cjs',
      file: 'dist/vue3-pagination.cjs.js',
      exports: 'default',
    },
    plugins: [
      typescript(),
      vue({ css: false }),
      svg(),
      scss({
        extract: false,
        inject: false,
      }),
    ],
  },
].map(v => ({
  ...v,
  input: 'src/components/VPagination.vue',
  external: ['vue'],
}));
