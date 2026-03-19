# Weme UI Project Config JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/config.schema.json
```

This schema defines the structure of the project JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [config.schema.json](../../v3/config.schema.json "open original schema") |

## Weme UI Project Config JSON Schema Definitions (v3) Type

`object` ([Weme UI Project Config JSON Schema Definitions (v3)](config.md))

# Weme UI Project Config JSON Schema Definitions (v3) Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :---------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)            | `string` | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-config-schema-url.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/$schema") |
| [paths](#paths)               | `object` | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths")               |
| [registries](#registries)     | `array`  | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries")     |
| [cssVariables](#cssvariables) | `object` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-css-variables.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/cssVariables")        |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v3/config.schema.json`

`$schema`

* is required

* Type: `string` ([Project Config Schema URL](config-properties-project-config-schema-url.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-config-schema-url.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/$schema")

### $schema Type

`string` ([Project Config Schema URL](config-properties-project-config-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v3/config.schema.json"
```

### $schema Examples

```json
"https://weme-ui.github.io/schema/v3/config.schema.json"
```

## paths

The paths used in the project.

`paths`

* is required

* Type: `object` ([Project Paths](config-properties-project-paths.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths")

### paths Type

`object` ([Project Paths](config-properties-project-paths.md))

## registries

The registries used in the project.

`registries`

* is required

* Type: `object[]` ([Registry Information](config-properties-project-registries-registry-information.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-registries.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/registries")

### registries Type

`object[]` ([Registry Information](config-properties-project-registries-registry-information.md))

## cssVariables

The CSS variables, which will be merged into the `uno.config.ts` file.

`cssVariables`

* is optional

* Type: `object` ([CSS Variables](config-properties-css-variables.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-css-variables.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/cssVariables")

### cssVariables Type

`object` ([CSS Variables](config-properties-css-variables.md))
