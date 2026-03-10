# Registry Item File Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1
```

A file in the registry item.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## 1 Type

`object` ([Registry Item File](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1.md))

# 1 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                    |
| :---------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)     | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-type.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/type")     |
| [path](#path)     | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-path.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/path")     |
| [target](#target) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-target.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/target") |
| [hash](#hash)     | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-hash.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/hash")     |

## type

The type of the registry item file.

`type`

* is required

* Type: `string` ([Registry Item File Type](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-type.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-type.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/type")

### type Type

`string` ([Registry Item File Type](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"component"`  |             |
| `"type"`       |             |
| `"style"`      |             |
| `"locale"`     |             |
| `"composable"` |             |
| `"utility"`    |             |

## path

The path of the registry item file.

`path`

* is required

* Type: `string` ([Registry Item File Path](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-path.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-path.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/path")

### path Type

`string` ([Registry Item File Path](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-path.md))

## target

The target of the registry item file.

`target`

* is optional

* Type: `string` ([Registry Item File Target](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-target.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-target.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/target")

### target Type

`string` ([Registry Item File Target](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-target.md))

## hash

The hash of the registry item file.

`hash`

* is required

* Type: `string` ([Registry Item File Hash](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-hash.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-hash.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/hash")

### hash Type

`string` ([Registry Item File Hash](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-hash.md))
