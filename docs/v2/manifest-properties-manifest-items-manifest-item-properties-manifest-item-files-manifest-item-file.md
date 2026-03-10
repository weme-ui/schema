# Manifest Item File Schema

```txt
https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items
```

A file in the manifest item.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [manifest.schema.json\*](../../v2/manifest.schema.json "open original schema") |

## items Type

`object` ([Manifest Item File](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file.md))

# items Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                            |
| :---------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)     | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-registry-item-file-type.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/type")        |
| [source](#source) | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-source.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/source")    |
| [dest](#dest)     | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-destination.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/dest") |
| [hash](#hash)     | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-hash.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/hash")        |

## type

The type of the registry item file.

`type`

* is required

* Type: `string` ([Registry Item File Type](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-registry-item-file-type.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-registry-item-file-type.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/type")

### type Type

`string` ([Registry Item File Type](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-registry-item-file-type.md))

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
| `"file"`       |             |

## source

The source of the manifest item file.

`source`

* is required

* Type: `string` ([Manifest Item File Source](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-source.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-source.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/source")

### source Type

`string` ([Manifest Item File Source](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-source.md))

### source Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## dest

The destination of the manifest item file.

`dest`

* is required

* Type: `string` ([Manifest Item File Destination](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-destination.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-destination.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/dest")

### dest Type

`string` ([Manifest Item File Destination](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-destination.md))

## hash

The hash of the manifest item file.

`hash`

* is required

* Type: `string` ([Manifest Item File Hash](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-hash.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-hash.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/hash")

### hash Type

`string` ([Manifest Item File Hash](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-manifest-item-file-hash.md))
