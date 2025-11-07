# Untitled object in Weme UI Project JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## items Type

`object` ([Details](project-properties-repos-items.md))

# items Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :-------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [repo](#repo)         | `string`  | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-repo.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/repo")         |
| [registry](#registry) | `string`  | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-registry.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/registry") |
| [default](#default)   | `boolean` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-default.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/default")   |
| [prefix](#prefix)     | `string`  | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-prefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/prefix")     |
| [license](#license)   | `string`  | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-license.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/license")   |

## repo

The repository name.

`repo`

* is required

* Type: `string`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-repo.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/repo")

### repo Type

`string`

## registry

The registry name.

`registry`

* is required

* Type: `string`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-registry.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/registry")

### registry Type

`string`

## default

Whether to use this registry as the default one.

`default`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-default.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/default")

### default Type

`boolean`

### default Default Value

The default value is:

```json
false
```

## prefix

The prefix for the registry item's files.

`prefix`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-prefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/prefix")

### prefix Type

`string`

### prefix Default Value

The default value is:

```json
"ui"
```

## license

The license for the private registry.

`license`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-items-properties-license.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/license")

### license Type

`string`
