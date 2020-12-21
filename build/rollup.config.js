import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import svg from 'rollup-plugin-svg-to-vue';
import path from 'path';

export default [
  {
    output: {
      compact: true,
      format: 'esm',
      file: 'dist/vue3-pagination.esm.js',
    },
    plugins: [
      typescript(),
      svg(),
      scss({
        output: path.resolve('dist', 'vue3-pagination.css'),
      }),
      vue({ css: false }),
    ],
  },
  {
    output: {
      compact: true,
      format: 'cjs',
      file: 'dist/vue3-pagination.cjs.js',
      exports: 'default',
    },
    plugins: [typescript(), svg(), scss(), vue({ css: false })],
  },
].map(v => ({
  ...v,
  input: 'src/components/VPagination.vue',
  external: ['vue'],
}));
