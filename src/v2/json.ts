/* eslint-disable no-console */
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { z } from 'zod'
import { ConfigSchemaV2 } from './config'
import { CONFIG_SCHEMA_URL, MANIFEST_SCHEMA_URL, REGISTRY_SCHEMA_URL, REPOSITORY_SCHEMA_URL } from './constants'
import { ManifestSchemaV2 } from './manifest'
import { RegistrySchemaV2 } from './registry'
import { RepositorySchemaV2 } from './repository'

interface SchemaMapping {
  name: string
  schema: z.ZodObject<any>
  url: string
}

const schemaMapping: SchemaMapping[] = [
  { name: 'repository.schema.json', schema: RepositorySchemaV2, url: REPOSITORY_SCHEMA_URL },
  { name: 'registry.schema.json', schema: RegistrySchemaV2, url: REGISTRY_SCHEMA_URL },
  { name: 'config.schema.json', schema: ConfigSchemaV2, url: CONFIG_SCHEMA_URL },
  { name: 'manifest.schema.json', schema: ManifestSchemaV2, url: MANIFEST_SCHEMA_URL },
]

function outputJson(): void {
  console.log('==> Output JSON Schema for v2')
  console.log()

  if (existsSync('./schemas/v2')) {
    rmSync('./schemas/v2', { recursive: true, force: true })
  }

  mkdirSync('./schemas/v2', { recursive: true })

  schemaMapping.forEach((item) => {
    const content = `${JSON.stringify(z.toJSONSchema(item.schema, {
      target: 'draft-07',
    }), null, 2)
      .replaceAll('"$schema": "http://', '"$schema": "https://')
    }\n`

    // Write to file
    try {
      writeFileSync(`./schemas/v2/${item.name}`, content, 'utf-8')
      console.log(` ✅ ${item.name} generated successfully.`)
    }
    catch (error) {
      console.error(` ❌ Failed to generate ${item.name}:`, error)
    }
  })
}

outputJson()
