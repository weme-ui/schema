# Weme UI Project JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/project.schema.json
```

The Weme UI CLI will load `weme.config.json` before running any command.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json](../project.schema.json "open original schema") |

## Weme UI Project JSON Schema Definitions Type

`object` ([Weme UI Project JSON Schema Definitions](project.md))

# Weme UI Project JSON Schema Definitions Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :----------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema) | `string` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-schema.md "https://weme-ui.github.io/schema/project.schema.json#/properties/$schema") |
| [repos](#repos)    | `array`  | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos")    |
| [paths](#paths)    | `object` | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-paths.md "https://weme-ui.github.io/schema/project.schema.json#/properties/paths")    |
| [unocss](#unocss)  | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss")  |

## $schema

The schema URL.

`$schema`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-schema.md "https://weme-ui.github.io/schema/project.schema.json#/properties/$schema")

### $schema Type

`string`

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/project.json"
```

## repos

The repos to fetch the components from.

`repos`

* is required

* Type: `object[]` ([Details](project-properties-repos-items.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos")

### repos Type

`object[]` ([Details](project-properties-repos-items.md))

## paths

The paths for the project.

`paths`

* is required

* Type: `object` ([Details](project-properties-paths.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-paths.md "https://weme-ui.github.io/schema/project.schema.json#/properties/paths")

### paths Type

`object` ([Details](project-properties-paths.md))

## unocss

The UnoCSS Preset options.

`unocss`

* is optional

* Type: `object` ([Details](project-properties-unocss.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss")

### unocss Type

`object` ([Details](project-properties-unocss.md))
