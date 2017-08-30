import fs from 'fs'

export default function (srcPath, destPath) {
  return new Promise((resolve, reject) => {
    // 读入文件流
    let readStream = fs.createReadStream(srcPath)
    // 写入文件流
    let writeStream = fs.createWriteStream(destPath)

    readStream.on('data', (chunk) => {
      if (writeStream.write(chunk) === false) {
        readStream.pause()
      }
    })

    // 流读取结束
    readStream.on('end', () => {
      writeStream.end()
      resolve()
    })

    readStream.on('error', (error) => {
      reject(error)
    })

    // 流写入成功，则唤醒读取流
    writeStream.on('drain', () => {
      readStream.resume()
    })

    writeStream.on('error', (error) => {
      reject(error)
    })
  })
}
