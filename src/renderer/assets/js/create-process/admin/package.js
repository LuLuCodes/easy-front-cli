import writeFile from '../write-file'

let file = {
  'name': '',
  'version': '',
  'description': '',
  'author': 'qianqing <qian.qing@aliyun.com>',
  'private': true,
  'scripts': {
    'dev': 'nuxt',
    'build': 'nuxt build',
    'start': 'nuxt start',
    'generate': 'nuxt generate',
    'lint': 'eslint --ext .js,.vue --ignore-path .gitignore .',
    'precommit': 'npm run lint'
  },
  'dependencies': {
    'axios': '^0.16.2',
    'cross-env': '^5.0.5',
    'iview': '^2.2.0',
    'js-cookie': '^2.1.4',
    'nuxt': '^1.0.0-rc3'
  },
  'devDependencies': {
    'babel-eslint': '^7.2.3',
    'eslint': '^4.3.0',
    'eslint-config-standard': '^10.2.1',
    'eslint-loader': '^1.9.0',
    'eslint-plugin-html': '^3.1.1',
    'eslint-plugin-import': '^2.7.0',
    'eslint-plugin-node': '^5.1.1',
    'eslint-plugin-promise': '^3.5.0',
    'eslint-plugin-standard': '^3.0.1'
  },
  'repository': {
    'type': 'git',
    'url': ''
  }
}

export default function (opts) {
  const data = opts
  file.name = data.name
  file.version = data.version
  file.description = data.desc
  file.repository.url = data.git

  if (data.css.indexOf('less') > -1) {
    file.devDependencies['less'] = '^2.7.2'
    file.devDependencies['less-loader'] = '^4.0.5'
  }

  if (data.css.indexOf('sass') > -1) {
    file.devDependencies['node-sass'] = '^4.5.3'
    file.devDependencies['sass-loader'] = '^6.0.6'
  }

  return writeFile({
    directory: `${opts.saveDirectory}/${opts.name}`,
    fileName: 'package.json',
    data: JSON.stringify(file),
    codeFormat: {
      indent_size: 2
    }
  })
}
