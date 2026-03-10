# Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json
```

This schema defines the structure of the registry JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [registry.schema.json](../../v2/registry.schema.json "open original schema") |

## Weme UI Registry JSON Schema Definitions Type

`object` ([Weme UI Registry JSON Schema Definitions](registry.md))

# Weme UI Registry JSON Schema Definitions Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                 |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)          | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-schema-url.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/$schema")      |
| [name](#name)               | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-name.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/name")               |
| [url](#url)                 | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-url.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/url")                 |
| [description](#description) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-description.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/description") |
| [prefix](#prefix)           | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/prefix")           |
| [items](#items)             | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items")             |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v2/registry.schema.json`

`$schema`

* is required

* Type: `string` ([Registry Schema URL](registry-properties-registry-schema-url.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-schema-url.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/$schema")

### $schema Type

`string` ([Registry Schema URL](registry-properties-registry-schema-url.md))

### $schema Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v2/registry.schema.json"
```

## name

The name of the registry, in the format of `repo/registry`.

`name`

* is required

* Type: `string` ([Registry Name](registry-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-name.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/name")

### name Type

`string` ([Registry Name](registry-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*(\/)[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*\(%5C%2F\)%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

## url

The URL of the registry, which should point to the registry's `registry.json` file.

`url`

* is required

* Type: `string` ([Registry URL](registry-properties-registry-url.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-url.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/url")

### url Type

`string` ([Registry URL](registry-properties-registry-url.md))

### url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## description

The description of the registry.

`description`

* is optional

* Type: `string` ([Registry Description](registry-properties-registry-description.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-description.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/description")

### description Type

`string` ([Registry Description](registry-properties-registry-description.md))

## prefix

The prefix of the components from this registry.

`prefix`

* is required

* Type: `string` ([Registry Prefix](registry-properties-registry-prefix.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/prefix")

### prefix Type

`string` ([Registry Prefix](registry-properties-registry-prefix.md))

### prefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## items

The items in this registry.

`items`

* is required

* Type: `object[]` ([Details](registry-properties-registry-items-items.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-registry-items.md "https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items")

### items Type

`object[]` ([Details](registry-properties-registry-items-items.md))
