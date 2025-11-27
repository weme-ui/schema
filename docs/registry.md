# Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json
```

Weme UI registry of components, composables, themes, blocks, etc.

| Abstract            | Extensible | Status      | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :---------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Stabilizing | No           | Forbidden         | Allowed               | none                | [registry.schema.json](../registry.schema.json "open original schema") |

## Weme UI Registry JSON Schema Definitions Type

`object` ([Weme UI Registry JSON Schema Definitions](registry.md))

## Weme UI Registry JSON Schema Definitions Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

# Weme UI Registry JSON Schema Definitions Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)          | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-schema-url.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/$schema")               |
| [name](#name)               | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-name.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/name")               |
| [description](#description) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-description.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/description") |
| [version](#version)         | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-version.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/version")         |
| [prefix](#prefix)           | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/prefix")           |
| [items](#items)             | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items")             |

## $schema

The schema URL.

`$schema`

* is optional

* Type: `string` ([Schema URL](registry-properties-schema-url.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-schema-url.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/$schema")

### $schema Type

`string` ([Schema URL](registry-properties-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/registry.schema.json"
```

## name

The name of the registry.

`name`

* is required

* Type: `string` ([Registry name](registry-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-name.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/name")

### name Type

`string` ([Registry name](registry-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

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

* Type: `string` ([Registry description](registry-properties-registry-description.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-description.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/description")

### description Type

`string` ([Registry description](registry-properties-registry-description.md))

## version

The version of the registry. Empty to use the version from `package.json`.

`version`

* is optional

* Type: `string` ([Registry version](registry-properties-registry-version.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-version.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/version")

### version Type

`string` ([Registry version](registry-properties-registry-version.md))

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

* Type: `string` ([Registry prefix](registry-properties-registry-prefix.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/prefix")

### prefix Type

`string` ([Registry prefix](registry-properties-registry-prefix.md))

### prefix Examples

```json
"ui"
```

## items

The items of the registry.

`items`

* is required

* Type: `object[]` ([Details](registry-properties-registry-items-items.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/items")

### items Type

`object[]` ([Details](registry-properties-registry-items-items.md))
