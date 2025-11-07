# Untitled object in Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [registry.schema.json\*](../registry.schema.json "open original schema") |

## items Type

`object` ([Details](registry-properties-items-items-properties-files-items.md))

# items Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [path](#path)       | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-path.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/path")       |
| [content](#content) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-content.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/content") |
| [type](#type)       | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-type.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/type")       |
| [target](#target)   | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-target.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/target")   |

## path

The path to the file. This is relative to the item's directory.

`path`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-path.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/path")

### path Type

`string`

## content

The content of the file. This is a stringified version of the file's content.

`content`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-content.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/content")

### content Type

`string`

## type

The type of the file. This is used to group files in the registry.

`type`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-type.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/type")

### type Type

`string`

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

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files-items-properties-target.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files/items/properties/target")

### target Type

`string`
