# Weme UI Project Config JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/v2/config.schema.json
```

This schema defines the structure of the project config JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [config.schema.json](../../v2/config.schema.json "open original schema") |

## Weme UI Project Config JSON Schema Definitions Type

`object` ([Weme UI Project Config JSON Schema Definitions](config.md))

# Weme UI Project Config JSON Schema Definitions Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                               |
| :------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)        | `string` | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-schema-url.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/$schema")    |
| [paths](#paths)           | `object` | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-paths.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/paths")           |
| [registries](#registries) | `array`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries") |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v2/config.schema.json`

`$schema`

* is required

* Type: `string` ([Config Schema URL](config-properties-config-schema-url.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-schema-url.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/$schema")

### $schema Type

`string` ([Config Schema URL](config-properties-config-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v2/config.schema.json"
```

## paths

The paths used in the project config.

`paths`

* is required

* Type: `object` ([Config Paths](config-properties-config-paths.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-paths.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/paths")

### paths Type

`object` ([Config Paths](config-properties-config-paths.md))

## registries

The registries used in the project.

`registries`

* is required

* Type: `object[]` ([Config Registry](config-properties-config-registries-config-registry.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions](config-properties-config-registries.md "https://weme-ui.github.io/schema/v2/config.schema.json#/properties/registries")

### registries Type

`object[]` ([Config Registry](config-properties-config-registries-config-registry.md))

### registries Default Value

The default value is:

```json
[]
```
