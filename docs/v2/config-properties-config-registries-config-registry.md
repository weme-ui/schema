# Config Registry Schema

```txt
https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items
```

A registry used in the project config.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [config.schema.json\*](../../v2/config.schema.json "open original schema") |

## items Type

`object` ([Config Registry](config-properties-config-registries-config-registry.md))

# items Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                    |
| :------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [repo](#repo)       | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-repository-nameurl.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/repo")  |
| [name](#name)       | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-registry-name.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/name")       |
| [prefix](#prefix)   | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/prefix")   |
| [default](#default) | `boolean` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-default-registry.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/default") |

## repo

The name/URL of the repository.

`repo`

* is required

* Type: `string` ([Repository Name/URL](config-properties-config-registries-config-registry-properties-repository-nameurl.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-repository-nameurl.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/repo")

### repo Type

`string` ([Repository Name/URL](config-properties-config-registries-config-registry-properties-repository-nameurl.md))

## name

The name of the registry, in the format of `repo/registry`.

`name`

* is required

* Type: `string` ([Registry Name](config-properties-config-registries-config-registry-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-registry-name.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/name")

### name Type

`string` ([Registry Name](config-properties-config-registries-config-registry-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*(\/)[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*\(%5C%2F\)%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

## prefix

The prefix of the components from this registry.

`prefix`

* is required

* Type: `string` ([Registry Prefix](config-properties-config-registries-config-registry-properties-registry-prefix.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-registry-prefix.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/prefix")

### prefix Type

`string` ([Registry Prefix](config-properties-config-registries-config-registry-properties-registry-prefix.md))

### prefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## default

Whether this registry is the default registry, which will be used when the registry is not specified in the component usage.

`default`

* is optional

* Type: `boolean` ([Default Registry](config-properties-config-registries-config-registry-properties-default-registry.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries-config-registry-properties-default-registry.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries/items/properties/default")

### default Type

`boolean` ([Default Registry](config-properties-config-registries-config-registry-properties-default-registry.md))
