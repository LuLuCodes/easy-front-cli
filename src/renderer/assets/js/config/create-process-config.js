export function AdminProcess () {
  return {// 1 is doing, 2 is done, 3 is error
    package: {
      status: 1,
      content: '创建 package.json'
    },
    readme: {
      status: 1,
      content: '创建 README.md'
    },
    nuxt: {
      status: 1,
      content: '创建 nuxt.config.js'
    },
    editorconfig: {
      status: 1,
      content: '创建 .editorconfig'
    },
    eslintrc: {
      status: 1,
      content: '创建 .eslintrc.js'
    },
    gitignore: {
      status: 1,
      content: '创建 .gitignore'
    },
    assets: {
      status: 1,
      content: '创建 assets资源文件'
    },
    components: {
      status: 1,
      content: '创建 components'
    },
    layouts: {
      status: 1,
      content: '创建 layouts全局布局'
    },
    middleware: {
      status: 1,
      content: '创建 middleware中间件'
    },
    pages: {
      status: 1,
      content: '创建 pages页面'
    },
    plugins: {
      status: 1,
      content: '创建 plugins插件库'
    },
    static: {
      status: 1,
      content: '创建 static静态资源'
    },
    store: {
      status: 1,
      content: '创建 vuex store'
    }
  }
}
