# Registry Information Schema

```txt
https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items
```

A registry used in the project.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [config.schema.json\*](../../v3/config.schema.json "open original schema") |

## items Type

`object` ([Registry Information](config-properties-project-registries-registry-information.md))

# items Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                               |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-registry-name.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/name")       |
| [url](#url)         | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-registry-url.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/url")         |
| [library](#library) | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-library-name.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/library")     |
| [prefix](#prefix)   | `string`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-library-prefix.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/prefix")    |
| [default](#default) | `boolean` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-default-registry.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/default") |

## name

The name of the registry, in the format of `owner/repo`.

`name`

* is required

* Type: `string` ([Registry Name](config-properties-project-registries-registry-information-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-registry-name.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/name")

### name Type

`string` ([Registry Name](config-properties-project-registries-registry-information-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[\s\S]{0,}(\/)[\s\S]{0,}$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5Cs%5CS%5D%7B0%2C%7D\(%5C%2F\)%5B%5Cs%5CS%5D%7B0%2C%7D%24 "try regular expression with regexr.com")

## url

The URL of the registry's `registry.json` file.

`url`

* is required

* Type: `string` ([Registry URL](config-properties-project-registries-registry-information-properties-registry-url.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-registry-url.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/url")

### url Type

`string` ([Registry URL](config-properties-project-registries-registry-information-properties-registry-url.md))

### url Examples

```json
"@weme-ui/weme-ui"
```

## library

The name of the library.

`library`

* is required

* Type: `string` ([Library Name](config-properties-project-registries-registry-information-properties-library-name.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-library-name.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/library")

### library Type

`string` ([Library Name](config-properties-project-registries-registry-information-properties-library-name.md))

### library Examples

```json
"slim"
```

## prefix

The prefix of the library.

`prefix`

* is required

* Type: `string` ([Library Prefix](config-properties-project-registries-registry-information-properties-library-prefix.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-library-prefix.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/prefix")

### prefix Type

`string` ([Library Prefix](config-properties-project-registries-registry-information-properties-library-prefix.md))

### prefix Default Value

The default value is:

```json
"ui"
```

### prefix Examples

```json
"ui"
```

## default

Whether to use this registry as the default one.

`default`

* is optional

* Type: `boolean` ([Default Registry](config-properties-project-registries-registry-information-properties-default-registry.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries-registry-information-properties-default-registry.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries/items/properties/default")

### default Type

`boolean` ([Default Registry](config-properties-project-registries-registry-information-properties-default-registry.md))

### default Examples

```json
true
```
