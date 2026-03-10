# Manifest Item Schema

```txt
https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items
```

An item in the manifest.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [manifest.schema.json\*](../../v2/manifest.schema.json "open original schema") |

## items Type

`object` ([Manifest Item](manifest-properties-manifest-items-manifest-item.md))

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                         |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-name.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/name")   |
| [scope](#scope) | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-registry-item-scope.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/scope") |
| [files](#files) | `array`  | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files") |

## name

The name of the manifest item.

`name`

* is required

* Type: `string` ([Manifest Item Name](manifest-properties-manifest-items-manifest-item-properties-manifest-item-name.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-name.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/name")

### name Type

`string` ([Manifest Item Name](manifest-properties-manifest-items-manifest-item-properties-manifest-item-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## scope

The scope of the registry item.

`scope`

* is required

* Type: `string` ([Registry Item Scope](manifest-properties-manifest-items-manifest-item-properties-registry-item-scope.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-registry-item-scope.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/scope")

### scope Type

`string` ([Registry Item Scope](manifest-properties-manifest-items-manifest-item-properties-registry-item-scope.md))

### scope Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"init"`      |             |
| `"component"` |             |
| `"layout"`    |             |
| `"theme"`     |             |
| `"page"`      |             |
| `"plugin"`    |             |

## files

The files of the manifest item.

`files`

* is required

* Type: `object[]` ([Manifest Item File](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files")

### files Type

`object[]` ([Manifest Item File](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file.md))
