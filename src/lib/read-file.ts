import * as fs from 'fs'
import * as path from 'path'
import type {Post} from '../types'

const pathToData = (filename = '') => path.join(process.cwd(), 'data', filename)

const readFile = (path: string) => fs.readFileSync(path).toString('utf-8')

const addJsonExtension = (filename: string) => `${filename}.json`

const removeJsonExtension = (filename: string) => filename.replace(/\.json$/, '')

export const readDataFile = (filename: string) => {
  const fullFilename = addJsonExtension(filename)
  const pathToFile = pathToData(fullFilename)
  const data = readFile(pathToFile)

  return JSON.parse(data) as Post
}

export const readAllDataFiles = () => {
  const files = listDataFiles()

  return files.map((filename) => readDataFile(filename))
}

export const listDataFiles = () => {
  const pathToDir = pathToData()
  const files = fs.readdirSync(pathToDir)

  return files.map((filename) => removeJsonExtension(filename))
}
