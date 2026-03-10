# Untitled object in Weme UI Repository JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [repository.schema.json\*](../../v2/repository.schema.json "open original schema") |

## items Type

`object` ([Details](repository-properties-registries-items.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-name.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/name")               |
| [url](#url)                 | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-url.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/url")                 |
| [description](#description) | `string` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-description.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/description") |
| [prefix](#prefix)           | `string` | Required | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-prefix.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/prefix")           |

## name

The name of the registry, in the format of `repo/registry`.

`name`

* is required

* Type: `string` ([Registry Name](repository-properties-registries-items-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-name.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/name")

### name Type

`string` ([Registry Name](repository-properties-registries-items-properties-registry-name.md))

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

* Type: `string` ([Registry URL](repository-properties-registries-items-properties-registry-url.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-url.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/url")

### url Type

`string` ([Registry URL](repository-properties-registries-items-properties-registry-url.md))

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

* Type: `string` ([Registry Description](repository-properties-registries-items-properties-registry-description.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-description.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/description")

### description Type

`string` ([Registry Description](repository-properties-registries-items-properties-registry-description.md))

## prefix

The prefix of the components from this registry.

`prefix`

* is required

* Type: `string` ([Registry Prefix](repository-properties-registries-items-properties-registry-prefix.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-items-properties-registry-prefix.md "https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/prefix")

### prefix Type

`string` ([Registry Prefix](repository-properties-registries-items-properties-registry-prefix.md))

### prefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`
