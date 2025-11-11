# Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json
```

Weme UI registry of components, composables, themes, blocks, etc.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [registry.schema.json](../registry.schema.json "open original schema") |

## Weme UI Registry JSON Schema Definitions Type

`object` ([Weme UI Registry JSON Schema Definitions](registry.md))

## Weme UI Registry JSON Schema Definitions Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

# Weme UI Registry JSON Schema Definitions Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)          | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-schema.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/$schema")          |
| [id](#id)                   | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-id.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/id")                   |
| [name](#name)               | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-name.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/name")               |
| [description](#description) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-description.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/description") |
| [version](#version)         | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-version.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/version")         |
| [prefix](#prefix)           | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-prefix.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/prefix")           |
| [access](#access)           | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-access.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/access")           |
| [meta](#meta)               | `object` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-meta.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta")               |
| [items](#items)             | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-items.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items")             |

## $schema

The schema URL.

`$schema`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-schema.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/$schema")

### $schema Type

`string`

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/registry.json"
```

## id

The ID of the registry.

`id`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-id.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/id")

### id Type

`string`

## name

The name of the registry.

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-name.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/name")

### name Type

`string`

### name Examples

```json
"weme-ui/std"
```

```json
"weme-ui/plus"
```

## description

The description of the registry.

`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-description.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/description")

### description Type

`string`

## version

The version of the registry. Empty to use the version from `package.json`.

`version`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-version.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/version")

### version Type

`string`

### version Constraints

**unknown format**: the value of this string must follow the format: `semver`

### version Examples

```json
"1.0.0"
```

## prefix

Default prefix for added components of the registry.

`prefix`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-prefix.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/prefix")

### prefix Type

`string`

### prefix Examples

```json
"ui"
```

## access

The access level of the registry.

`access`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-access.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/access")

### access Type

`string`

### access Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"public"`  |             |
| `"private"` |             |

### access Default Value

The default value is:

```json
"public"
```

## meta

Additional metadata for the registry.

`meta`

* is optional

* Type: `object` ([Details](registry-properties-meta.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-meta.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta")

### meta Type

`object` ([Details](registry-properties-meta.md))

## items

The items of the registry.

`items`

* is required

* Type: `object[]` ([Details](registry-properties-items-items.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-items.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items")

### items Type

`object[]` ([Details](registry-properties-items-items.md))
