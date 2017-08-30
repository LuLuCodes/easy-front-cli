// import copyFile from '../copy-file'
// import path from 'path'
//
// export default function (opts) {
//   return copyFile(path.join(__dirname, '../../../../../../template/admin/README.md'), `${opts.saveDirectory}/${opts.name}/README.md`)
// }

import writeFile from '../write-file'

export default function (opts) {
  const data = opts
  let file = `
  # ${data.name}

  > ${data.desc}

  ## Build Setup

  \`\`\` bash
  # install dependencies
  $ npm install # Or yarn install

  # serve with hot reload at localhost:3000
  $ npm run dev

  # build for production and launch server
  $ npm run build
  $ npm start

  # generate static project
  $ npm run generate
  \`\`\`

  For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
`

  return writeFile({
    directory: `${opts.saveDirectory}/${opts.name}`,
    fileName: 'README.md',
    data: file,
    codeType: 'none'
  })
}
