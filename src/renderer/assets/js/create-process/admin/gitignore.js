import copyFile from '../copy-file'
import path from 'path'

export default function (opts) {
  return copyFile(path.join(__dirname, '../../../../../../template/admin/.gitignore'), `${opts.saveDirectory}/${opts.name}/.gitignore`)
}
