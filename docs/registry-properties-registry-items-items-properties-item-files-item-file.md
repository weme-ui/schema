# Item file Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items
```

A file required by the item.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [registry.schema.json\*](../registry.schema.json "open original schema") |

## items Type

`object` ([Item file](registry-properties-registry-items-items-properties-item-files-item-file.md))

# items Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [path](#path)       | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-path.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/path")       |
| [content](#content) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-content.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/content") |
| [type](#type)       | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-type.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/type")       |
| [target](#target)   | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-target.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/target")   |
| [hash](#hash)       | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-hash.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/hash")       |

## path

The path to the file. This is relative to the item's directory.

`path`

* is optional

* Type: `string` ([File path](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-path.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-path.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/path")

### path Type

`string` ([File path](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-path.md))

## content

The content of the file. This is a stringified version of the file's content.

`content`

* is optional

* Type: `string` ([File content](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-content.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-content.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/content")

### content Type

`string` ([File content](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-content.md))

## type

The type of the file. This is used to group files in the registry.

`type`

* is optional

* Type: `string` ([File type](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-type.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-type.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/type")

### type Type

`string` ([File type](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"component"`  |             |
| `"composable"` |             |
| `"plugin"`     |             |
| `"util"`       |             |
| `"type"`       |             |
| `"style"`      |             |
| `"file"`       |             |

## target

The target path to the file. This is relative to the user's project directory.

`target`

* is optional

* Type: `string` ([File target](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-target.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-target.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/target")

### target Type

`string` ([File target](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-target.md))

## hash

The hash of the file. This is used to check if the file has changed.

`hash`

* is optional

* Type: `string` ([File hash](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-hash.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-hash.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/hash")

### hash Type

`string` ([File hash](registry-properties-registry-items-items-properties-item-files-item-file-properties-file-hash.md))
