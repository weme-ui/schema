# Registry Schema

```txt
https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items
```

The registry in the repository.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [repository.schema.json\*](../repository.schema.json "open original schema") |

## items Type

`object` ([Registry](repository-properties-registries-registry.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-name.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/name")               |
| [description](#description) | `string` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-description.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/description") |
| [prefix](#prefix)           | `string` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/prefix")           |
| [statistics](#statistics)   | `object` | Optional | cannot be null | [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-statistics.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/statistics")   |

## name

The name of the registry. It should be `<owner>/<repo>` format.

`name`

* is optional

* Type: `string` ([Registry name](repository-properties-registries-registry-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-name.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/name")

### name Type

`string` ([Registry name](repository-properties-registries-registry-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

### name Examples

```json
"weme-ui/std"
```

## description

The description of the registry.

`description`

* is optional

* Type: `string` ([Registry description](repository-properties-registries-registry-properties-registry-description.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-description.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/description")

### description Type

`string` ([Registry description](repository-properties-registries-registry-properties-registry-description.md))

## prefix

Default prefix for added components of the registry.

`prefix`

* is optional

* Type: `string` ([Registry prefix](repository-properties-registries-registry-properties-registry-prefix.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/prefix")

### prefix Type

`string` ([Registry prefix](repository-properties-registries-registry-properties-registry-prefix.md))

### prefix Examples

```json
"ui"
```

## statistics

The statistics of the registry.

`statistics`

* is optional

* Type: `object` ([Registry statistics](repository-properties-registries-registry-properties-registry-statistics.md))

* cannot be null

* defined in: [Weme UI Repository JSON Schema Definitions](repository-properties-registries-registry-properties-registry-statistics.md "https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/statistics")

### statistics Type

`object` ([Registry statistics](repository-properties-registries-registry-properties-registry-statistics.md))
