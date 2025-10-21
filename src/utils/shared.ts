import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'pathe'

export function readFile<T = any>(path: string, cwd: string = ''): T | undefined {
  const filePath = resolve(cwd, path)

  if (!existsSync(filePath)) {
    throw new Error(`File ${filePath} not found`)
  }

  try {
    const content = readFileSync(filePath, 'utf-8')

    if (!content || content.trim() === '') {
      throw new Error(`File ${filePath} is empty`)
    }

    if (filePath.endsWith('.json')) {
      return JSON.parse(content) as T
    }

    return content as T
  }
  catch (e) {
    throw new Error(`File ${filePath} is not a valid JSON : ${e}`)
  }
}
