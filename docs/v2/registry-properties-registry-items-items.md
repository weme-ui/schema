# Untitled object in Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## items Type

`object` ([Details](registry-properties-registry-items-items.md))

# items Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                              |
| :-------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)                           | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-name.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/name")                                |
| [scope](#scope)                         | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-scope.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/scope")                              |
| [dependencies](#dependencies)           | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-dependencies.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/dependencies")                |
| [devDependencies](#devdependencies)     | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-development-dependencies.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/devDependencies") |
| [localDependencies](#localdependencies) | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-local-dependencies.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/localDependencies")     |
| [files](#files)                         | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files")                              |
| [cssVariables](#cssvariables)           | `object` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-css-variables.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/cssVariables")               |

## name

The name of the registry item, which should be unique in the registry.

`name`

* is required

* Type: `string` ([Registry Item Name](registry-properties-registry-items-items-properties-registry-item-name.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-name.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/name")

### name Type

`string` ([Registry Item Name](registry-properties-registry-items-items-properties-registry-item-name.md))

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

* Type: `string` ([Registry Item Scope](registry-properties-registry-items-items-properties-registry-item-scope.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-scope.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/scope")

### scope Type

`string` ([Registry Item Scope](registry-properties-registry-items-items-properties-registry-item-scope.md))

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

## dependencies

The names of other items that this item depends on.

`dependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-dependencies.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/dependencies")

### dependencies Type

`string[]`

## devDependencies

The names of other items that this item depends on during development.

`devDependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-development-dependencies.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/devDependencies")

### devDependencies Type

`string[]`

## localDependencies

The names of other items in the same registry that this item depends on.

`localDependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-local-dependencies.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/localDependencies")

### localDependencies Type

`string[]`

## files

The files that belong to this item.

`files`

* is required

* Type: an array of merged types ([Registry Item File](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-files.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files")

### files Type

an array of merged types ([Registry Item File](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file.md))

## cssVariables

The CSS variables of the registry item.

`cssVariables`

* is optional

* Type: `object` ([Registry Item CSS Variables](registry-properties-registry-items-items-properties-registry-item-css-variables.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items-items-properties-registry-item-css-variables.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/cssVariables")

### cssVariables Type

`object` ([Registry Item CSS Variables](registry-properties-registry-items-items-properties-registry-item-css-variables.md))
