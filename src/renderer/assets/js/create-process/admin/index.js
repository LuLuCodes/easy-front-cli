const files = require.context('.', false, /\.js$/)
const process = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  process[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default process
