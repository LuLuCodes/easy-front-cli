import writeFile from '../write-file'

export default function (opts) {
  const data = opts
  let css = ``

  if (data.css.indexOf('less') > -1) {
    css += `{ // less-loader
        test: /\\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },`
  }

  if (data.css.indexOf('sass') > -1) {
    css += `{ // sass-loader
        test: /\\.sass/,
        loader: 'style-loader!css-loader!sass-loader'
      },`
  }

  let file = `
  module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'easy-front-admin-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Easy Front 管理系统模板' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    // '~assets/css/theme.less', // 引入主题文件，如需定制化主题，请修改改文件
    '~assets/css/main.less'
  ],
  cache: true,
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    vendor: [
      'axios',
      'iview'
    ],
    loaders: [
      {
        test: /\\.css$/,
        loader: 'vue-style-loader!css-loader'
      },
      ${css}
      {
        test: /\\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\\.(woff2?|eot|ttf|otf)(\\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  },
  plugins: ['~plugins/iview']
};`

  return writeFile({
    directory: `${opts.saveDirectory}/${opts.name}`,
    fileName: 'nuxt.config.js',
    data: file,
    codeFormat: {
      indent_size: 2
    }
  })
}
