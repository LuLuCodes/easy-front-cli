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
    }
  }
}