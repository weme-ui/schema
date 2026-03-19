# Untitled object in Weme UI Manifest JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [manifest.schema.json\*](../../v3/manifest.schema.json "open original schema") |

## items Type

`object` ([Details](manifest-properties-manifest-items-items.md))

# items Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :-------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [scope](#scope)                         | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-scope.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/scope")                                         |
| [name](#name)                           | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-name.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/name")                                           |
| [description](#description)             | `string` | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-description.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/description")                             |
| [dependencies](#dependencies)           | `array`  | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-dependencies.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/dependencies")                           |
| [devDependencies](#devdependencies)     | `array`  | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-dev-dependencies.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/devDependencies")                    |
| [localDependencies](#localdependencies) | `array`  | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-dependencies-in-the-same-registry.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/localDependencies") |
| [files](#files)                         | `array`  | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-files.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/files")                                         |
| [cssVariables](#cssvariables)           | `object` | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-css-variables.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/cssVariables")                          |
| [registry](#registry)                   | `object` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-registry.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry")                                        |
| [library](#library)                     | `object` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-library.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/library")                                          |
| [version](#version)                     | `object` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-version.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/version")                                          |
| [hash](#hash)                           | `object` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-hash.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/hash")                                                |

## scope

The scope of the registry library item.

`scope`

* is required

* Type: `string` ([Item Scope](manifest-properties-manifest-items-items-properties-item-scope.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-scope.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/scope")

### scope Type

`string` ([Item Scope](manifest-properties-manifest-items-items-properties-item-scope.md))

### scope Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"component"` |             |
| `"layout"`    |             |
| `"theme"`     |             |
| `"plugin"`    |             |
| `"page"`      |             |

### scope Examples

```json
"component"
```

## name

The name of the registry library item.

`name`

* is required

* Type: `string` ([Item Name](manifest-properties-manifest-items-items-properties-item-name.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-name.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/name")

### name Type

`string` ([Item Name](manifest-properties-manifest-items-items-properties-item-name.md))

### name Examples

```json
"button"
```

## description

The description of the registry library item.

`description`

* is optional

* Type: `string` ([Item Description](manifest-properties-manifest-items-items-properties-item-description.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-description.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/description")

### description Type

`string` ([Item Description](manifest-properties-manifest-items-items-properties-item-description.md))

## dependencies

The package dependencies of the registry library item.

`dependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-dependencies.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/dependencies")

### dependencies Type

`string[]`

### dependencies Examples

```json
[
  "react",
  "react-dom@^18.0.0"
]
```

## devDependencies

The package dev dependencies of the registry library item.

`devDependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-dev-dependencies.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/devDependencies")

### devDependencies Type

`string[]`

### devDependencies Examples

```json
[
  "unocss",
  "tsdown@^0.21.0"
]
```

## localDependencies

The local dependencies of the registry library item.

`localDependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-dependencies-in-the-same-registry.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/localDependencies")

### localDependencies Type

`string[]`

### localDependencies Examples

```json
[
  "icon",
  "slim/button"
]
```

## files

The files of the registry library item.

`files`

* is required

* Type: an array of merged types ([Registry Item File](manifest-properties-manifest-items-items-properties-item-files-registry-item-file.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-files.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/files")

### files Type

an array of merged types ([Registry Item File](manifest-properties-manifest-items-items-properties-item-files-registry-item-file.md))

### files Default Value

The default value is:

```json
[]
```

## cssVariables

The CSS variables of the registry library item.

`cssVariables`

* is optional

* Type: `object` ([Item CSS Variables](manifest-properties-manifest-items-items-properties-item-css-variables.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-item-css-variables.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/cssVariables")

### cssVariables Type

`object` ([Item CSS Variables](manifest-properties-manifest-items-items-properties-item-css-variables.md))

## registry



`registry`

* is required

* Type: `object` ([Details](manifest-properties-manifest-items-items-properties-registry.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-registry.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry")

### registry Type

`object` ([Details](manifest-properties-manifest-items-items-properties-registry.md))

## library



`library`

* is required

* Type: `object` ([Details](manifest-properties-manifest-items-items-properties-library.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-library.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/library")

### library Type

`object` ([Details](manifest-properties-manifest-items-items-properties-library.md))

## version



`version`

* is required

* Type: `object` ([Details](manifest-properties-manifest-items-items-properties-version.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-version.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/version")

### version Type

`object` ([Details](manifest-properties-manifest-items-items-properties-version.md))

## hash



`hash`

* is required

* Type: `object` ([Details](manifest-properties-manifest-items-items-properties-hash.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-items-items-properties-hash.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/hash")

### hash Type

`object` ([Details](manifest-properties-manifest-items-items-properties-hash.md))
