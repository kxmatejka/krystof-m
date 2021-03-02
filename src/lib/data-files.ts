import * as fs from 'fs'
import * as path from 'path'

const readFile = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => (error) ? reject(error) : resolve(data.toString()))
  })
}

const pathToData = (...restOfPath: string[]) => path.join(process.cwd(), 'data', ...restOfPath)

export const listDataDir = () => fs.readdirSync(pathToData())

export const readDataFileMeta = (slug: string) => readFile(pathToData(slug, 'meta.json'))

export const readDataFileContent = (slug: string) => readFile(pathToData(slug, 'content.html'))
