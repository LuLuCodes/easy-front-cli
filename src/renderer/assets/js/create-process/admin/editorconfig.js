import fs from 'fs-extra'
import path from 'path'

export default function (opts) {
  return fs.copy(path.join(__dirname, '../../../../../../template/admin/.editorconfig'), `${opts.saveDirectory}/${opts.name}/.editorconfig`)
}
