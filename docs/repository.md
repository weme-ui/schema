# Weme UI Repository JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/repository.schema.json
```

This is the repository configuration for the registry.

| Abstract            | Extensible | Status      | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :---------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Stabilizing | No           | Forbidden         | Forbidden             | none                | [repository.schema.json](../repository.schema.json "open original schema") |

## Weme UI Repository JSON Schema Definitions Type

`object` ([Weme UI Repository JSON Schema Definitions](repository.md))

## Weme UI Repository JSON Schema Definitions Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

# Weme UI Repository JSON Schema Definitions Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)        | `string` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-schema-url.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/$schema")         |
| [name](#name)             | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-name.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/name")       |
| [owner](#owner)           | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-owner.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/owner")     |
| [version](#version)       | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-version.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/version") |
| [registries](#registries) | `array`  | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries")      |
| [updated](#updated)       | `string` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-updated.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/updated") |

## $schema

The schema URL.

`$schema`

* is optional

* Type: `string` ([Schema URL](repository-properties-schema-url.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-schema-url.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/$schema")

### $schema Type

`string` ([Schema URL](repository-properties-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/repository.schema.json"
```

## name

The name of the repository.

`name`

* is required

* Type: `string` ([Repository name](repository-properties-repository-name.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-name.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/name")

### name Type

`string` ([Repository name](repository-properties-repository-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

### name Examples

```json
"weme-ui"
```

## owner

The owner of the repository.

`owner`

* is required

* Type: `string` ([Repository owner](repository-properties-repository-owner.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-owner.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/owner")

### owner Type

`string` ([Repository owner](repository-properties-repository-owner.md))

### owner Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

### owner Examples

```json
"weme-ui"
```

## version

The version of the repository.

`version`

* is required

* Type: `string` ([Repository version](repository-properties-repository-version.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-version.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/version")

### version Type

`string` ([Repository version](repository-properties-repository-version.md))

### version Constraints

**unknown format**: the value of this string must follow the format: `semver`

### version Examples

```json
"1.0.0"
```

## registries

The registries in the repository.

`registries`

* is required

* Type: `object[]` ([Registry](repository-properties-registries-registry.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries")

### registries Type

`object[]` ([Registry](repository-properties-registries-registry.md))

## updated

The last updated time of the repository.

`updated`

* is optional

* Type: `string` ([Repository updated](repository-properties-repository-updated.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-updated.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/updated")

### updated Type

`string` ([Repository updated](repository-properties-repository-updated.md))

### updated Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
