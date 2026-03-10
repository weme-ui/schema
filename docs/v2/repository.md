# Weme UI Repository JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/v2/repository.schema.json
```

This schema defines the structure of the repository JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [repository.schema.json](../../v2/repository.schema.json "open original schema") |

## Weme UI Repository JSON Schema Definitions Type

`object` ([Weme UI Repository JSON Schema Definitions](repository.md))

# Weme UI Repository JSON Schema Definitions Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                    |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)        | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-schema-url.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/$schema") |
| [repo](#repo)             | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-name.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/repo")          |
| [owner](#owner)           | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-owner.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/owner")        |
| [version](#version)       | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-repository-version.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/version")    |
| [registries](#registries) | `array`  | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries")         |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v2/repository.schema.json`

`$schema`

* is required

* Type: `string` ([Repository Schema URL](repository-properties-repository-schema-url.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-schema-url.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/$schema")

### $schema Type

`string` ([Repository Schema URL](repository-properties-repository-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v2/repository.schema.json"
```

## repo

The name of the repository.

`repo`

* is required

* Type: `string` ([Repository Name](repository-properties-repository-name.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-name.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/repo")

### repo Type

`string` ([Repository Name](repository-properties-repository-name.md))

### repo Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## owner

The owner of the repository.

`owner`

* is required

* Type: `string` ([Repository Owner](repository-properties-repository-owner.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-owner.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/owner")

### owner Type

`string` ([Repository Owner](repository-properties-repository-owner.md))

### owner Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## version

The version of the repository.

`version`

* is required

* Type: `string` ([Repository Version](repository-properties-repository-version.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-repository-version.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/version")

### version Type

`string` ([Repository Version](repository-properties-repository-version.md))

## registries



`registries`

* is required

* Type: `object[]` ([Details](repository-properties-registries-items.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries")

### registries Type

`object[]` ([Details](repository-properties-registries-items.md))
