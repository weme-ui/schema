# Untitled object in Weme UI Registry JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [registry.schema.json\*](../../v3/registry.schema.json "open original schema") |

## 0 Type

`object` ([Details](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0.md))

# 0 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                             |
| :---------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)     | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-type.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/type")     |
| [path](#path)     | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-path.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/path")     |
| [target](#target) | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-target.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/target") |
| [hash](#hash)     | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-hash.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/hash")     |

## type

The type of the registry item file.

`type`

* is required

* Type: `string` ([Registry Item File Type](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-type.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-type.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/type")

### type Type

`string` ([Registry Item File Type](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"file"` |             |

### type Examples

```json
"file"
```

## path

The path of the registry item file.

`path`

* is required

* Type: `string` ([Registry Item File Path](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-path.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-path.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/path")

### path Type

`string` ([Registry Item File Path](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-path.md))

### path Examples

```json
"path/to/file"
```

## target

The target of the registry item file.

`target`

* is required

* Type: `string` ([Registry Item File Target](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-target.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-target.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/target")

### target Type

`string` ([Registry Item File Target](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-target.md))

### target Examples

```json
"~/path/to/target"
```

## hash

The hash of the registry item file.

`hash`

* is required

* Type: `string` ([Registry Item File Hash](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-hash.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-hash.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/files/items/oneOf/0/properties/hash")

### hash Type

`string` ([Registry Item File Hash](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-hash.md))
