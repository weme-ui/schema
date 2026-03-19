# Weme UI Registry JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/registry.schema.json
```

This schema defines the structure of the registry JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [registry.schema.json](../../v3/registry.schema.json "open original schema") |

## Weme UI Registry JSON Schema Definitions (v3) Type

`object` ([Weme UI Registry JSON Schema Definitions (v3)](registry.md))

# Weme UI Registry JSON Schema Definitions (v3) Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)          | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-schema-url.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/$schema")  |
| [name](#name)               | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-name.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/name")           |
| [author](#author)           | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-author.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/author")       |
| [version](#version)         | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-version.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/version")     |
| [libraries](#libraries)     | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries") |
| [hash](#hash)               | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-hash.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/hash")           |
| [lastUpdated](#lastupdated) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-last-updated.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/lastUpdated")     |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v3/registry.schema.json`

`$schema`

* is required

* Type: `string` ([Registry Schema URL](registry-properties-registry-schema-url.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-schema-url.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/$schema")

### $schema Type

`string` ([Registry Schema URL](registry-properties-registry-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v3/registry.schema.json"
```

### $schema Examples

```json
"https://weme-ui.github.io/schema/v3/registry.schema.json"
```

## name

The name of the registry, in the format of `owner/repo`.

`name`

* is required

* Type: `string` ([Registry Name](registry-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-name.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/name")

### name Type

`string` ([Registry Name](registry-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[\s\S]{0,}(\/)[\s\S]{0,}$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5Cs%5CS%5D%7B0%2C%7D\(%5C%2F\)%5B%5Cs%5CS%5D%7B0%2C%7D%24 "try regular expression with regexr.com")

## author

The author of the registry.

`author`

* is optional

* Type: `string` ([Registry Author](registry-properties-registry-author.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-author.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/author")

### author Type

`string` ([Registry Author](registry-properties-registry-author.md))

### author Examples

```json
"Username <email@example.com>"
```

## version

The version of the registry.

`version`

* is required

* Type: `string` ([Registry Version](registry-properties-registry-version.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-version.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/version")

### version Type

`string` ([Registry Version](registry-properties-registry-version.md))

### version Default Value

The default value is:

```json
"1.0.0"
```

### version Examples

```json
"1.0.0"
```

## libraries

The libraries in the registry.

`libraries`

* is required

* Type: `object[]` ([Library](registry-properties-registry-libraries-library.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries")

### libraries Type

`object[]` ([Library](registry-properties-registry-libraries-library.md))

## hash

The SHA1 hash of the registry, DO NOT edit this manually.

`hash`

* is optional

* Type: `string` ([Registry Hash](registry-properties-registry-hash.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-hash.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/hash")

### hash Type

`string` ([Registry Hash](registry-properties-registry-hash.md))

## lastUpdated

The last updated of the registry, DO NOT edit this manually.

`lastUpdated`

* is optional

* Type: `string` ([Last Updated](registry-properties-last-updated.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-last-updated.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/lastUpdated")

### lastUpdated Type

`string` ([Last Updated](registry-properties-last-updated.md))
