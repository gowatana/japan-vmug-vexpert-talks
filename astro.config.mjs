import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gowatana.github.io/japan-vmug-vexpert-talks',
  outDir: './dist',
  // GitHub Pages では gh-pages ブランチにデプロイする場合の設定
  trailingSlash: 'ignore',
});
