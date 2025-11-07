# Untitled object in Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [registry.schema.json\*](../registry.schema.json "open original schema") |

## items Type

`object` ([Details](registry-properties-items-items.md))

# items Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :-------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-name.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/name")                                 |
| [type](#type)                                 | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-type.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/type")                                 |
| [title](#title)                               | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-title.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/title")                               |
| [description](#description)                   | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-description.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/description")                   |
| [dependencies](#dependencies)                 | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-dependencies.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/dependencies")                 |
| [devDependencies](#devdependencies)           | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-devdependencies.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/devDependencies")           |
| [registryDependencies](#registrydependencies) | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-registrydependencies.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/registryDependencies") |
| [files](#files)                               | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files")                               |
| [cssVars](#cssvars)                           | `object` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-cssvars.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/cssVars")                           |

## name

The name of the item. This is used to identify the item in the registry. It should be unique for your registry.

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-name.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/name")

### name Type

`string`

### name Examples

```json
"button"
```

```json
"icon"
```

## type

The type of the item.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-type.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"component"` |             |
| `"layout"`    |             |
| `"theme"`     |             |
| `"block"`     |             |
| `"page"`      |             |
| `"init"`      |             |

### type Examples

```json
"component"
```

## title

The human-readable title for your registry item. Keep it short and descriptive.

`title`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-title.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/title")

### title Type

`string`

### title Examples

```json
"Button"
```

```json
"Icon"
```

## description

A short description of the item.

`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-description.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/description")

### description Type

`string`

### description Examples

```json
"A button component."
```

```json
"An icon component."
```

## dependencies

An array of NPM dependencies required by the item.

`dependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-dependencies.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/dependencies")

### dependencies Type

`string[]`

## devDependencies

An array of NPM dev dependencies required by the item.

`devDependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-devdependencies.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/devDependencies")

### devDependencies Type

`string[]`

## registryDependencies

An array of registry dependencies required by the item. This is an array of registry item names.

`registryDependencies`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-registrydependencies.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/registryDependencies")

### registryDependencies Type

`string[]`

## files

The main payload of files required by the item.

`files`

* is required

* Type: `object[]` ([Details](registry-properties-items-items-properties-files-items.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-files.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/files")

### files Type

`object[]` ([Details](registry-properties-items-items-properties-files-items.md))

## cssVars

The CSS variables required by the item.

`cssVars`

* is optional

* Type: `object` ([Details](registry-properties-items-items-properties-cssvars.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items-items-properties-cssvars.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items/items/properties/cssVars")

### cssVars Type

`object` ([Details](registry-properties-items-items-properties-cssvars.md))
