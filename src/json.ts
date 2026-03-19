/* oxlint-disable no-console */
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { z } from 'zod'
import {
  CONFIG_SCHEMA_URL as CONFIG_SCHEMA_URL_V2,
  ConfigSchemaV2,
  MANIFEST_SCHEMA_URL as MANIFEST_SCHEMA_URL_V2,
  ManifestSchemaV2,
  REGISTRY_SCHEMA_URL as REGISTRY_SCHEMA_URL_V2,
  RegistrySchemaV2,
  REPOSITORY_SCHEMA_URL as REPOSITORY_SCHEMA_URL_V2,
  RepositorySchemaV2,
} from './v2'
import {
  RegistrySchema as RegistrySchemaV3,
  ConfigSchema as ConfigSchemaV3,
  REGISTRY_SCHEMA_URL as REGISTRY_SCHEMA_URL_V3,
  CONFIG_SCHEMA_URL as CONFIG_SCHEMA_URL_V3,
  MANIFEST_SCHEMA_URL as MANIFEST_SCHEMA_URL_V3,
  ManifestSchema as ManifestSchemaV3,
} from './v3'

interface SchemaData {
  version: string
  name: string
  schema: z.ZodObject<any>
  url: string
}

const schemas: SchemaData[] = [
  // Version: 2
  {
    version: 'v2',
    name: 'repository.schema.json',
    schema: RepositorySchemaV2,
    url: REPOSITORY_SCHEMA_URL_V2,
  },
  {
    version: 'v2',
    name: 'registry.schema.json',
    schema: RegistrySchemaV2,
    url: REGISTRY_SCHEMA_URL_V2,
  },
  {
    version: 'v2',
    name: 'config.schema.json',
    schema: ConfigSchemaV2,
    url: CONFIG_SCHEMA_URL_V2,
  },
  {
    version: 'v2',
    name: 'manifest.schema.json',
    schema: ManifestSchemaV2,
    url: MANIFEST_SCHEMA_URL_V2,
  },

  // Version: 3
  {
    version: 'v3',
    name: 'registry.schema.json',
    schema: RegistrySchemaV3,
    url: REGISTRY_SCHEMA_URL_V3,
  },
  {
    version: 'v3',
    name: 'config.schema.json',
    schema: ConfigSchemaV3,
    url: CONFIG_SCHEMA_URL_V3,
  },
  {
    version: 'v3',
    name: 'manifest.schema.json',
    schema: ManifestSchemaV3,
    url: MANIFEST_SCHEMA_URL_V3,
  },
]

async function exportJson(): Promise<void> {
  await Promise.all(
    schemas.map((schema) => {
      if (!existsSync(`./schemas/${schema.version}`)) {
        mkdirSync(`./schemas/${schema.version}`, { recursive: true })
      }

      const jsonSchema = `${JSON.stringify(
        z.toJSONSchema(schema.schema, {
          target: 'draft-07',
        }),
        null,
        2,
      ).replaceAll('"$schema": "http://', '"$schema": "https://')}\n`

      try {
        writeFileSync(`./schemas/${schema.version}/${schema.name}`, jsonSchema, 'utf-8')
        console.log(` ✅ JSON Schema ${schema.version}/${schema.name} generated.`)
      } catch (error) {
        console.error(
          ` ❌ Failed to generate JSON Schema ${schema.name} (${schema.version}):`,
          error,
        )
      }
    }),
  )
}

await exportJson()
