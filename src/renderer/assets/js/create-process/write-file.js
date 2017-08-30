import fs from 'fs'
import {js_beautify as beautyJS, html as beautyHtml, css as beautyCss} from 'js-beautify'

export default function (opts) {
  opts.codeFormat = opts.codeFormat || {}
  opts.codeType = opts.codeType || 'js'

  let data = ''
  if (opts.codeType === 'html') {
    data = beautyHtml(opts.data, Object.assign({
    }, opts.codeFormat))
  } else if (opts.codeType === 'js') {
    data = beautyJS(opts.data, Object.assign({
      indent_size: 2
    }, opts.codeFormat))
  } else if (opts.codeType === 'css') {
    data = beautyCss(opts.data, Object.assign({
      indent_size: 2
    }, opts.codeFormat))
  } else if (opts.codeType === 'none') {
    data = opts.data
  }

  if (!fs.existsSync(opts.saveDirectory)) {
    fs.mkdirSync(opts.saveDirectory)
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(`${opts.saveDirectory}/${opts.fileName}`, data, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
