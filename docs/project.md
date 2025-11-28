# Weme UI Project JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/project.schema.json
```

The Weme UI CLI will load `weme.config.json` before running any command.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [project.schema.json](../project.schema.json "open original schema") |

## Weme UI Project JSON Schema Definitions Type

`object` ([Weme UI Project JSON Schema Definitions](project.md))

# Weme UI Project JSON Schema Definitions Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :----------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema) | `string` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-schema-url.md "https://weme-ui.github.io/schema/project.schema.json#/properties/$schema")           |
| [repos](#repos)    | `array`  | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos")                  |
| [paths](#paths)    | `object` | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-paths.md "https://weme-ui.github.io/schema/project.schema.json#/properties/paths")                  |
| [unocss](#unocss)  | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss") |
| [items](#items)    | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-installed-items.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items")        |

## $schema

The schema URL.

`$schema`

* is optional

* Type: `string` ([Schema URL](project-properties-schema-url.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-schema-url.md "https://weme-ui.github.io/schema/project.schema.json#/properties/$schema")

### $schema Type

`string` ([Schema URL](project-properties-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/project.schema.json"
```

## repos

The repos to fetch the components from.

`repos`

* is required

* Type: `object[]` ([Repo](project-properties-repos-repo.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos")

### repos Type

`object[]` ([Repo](project-properties-repos-repo.md))

## paths

The paths for the project.

`paths`

* is required

* Type: `object` ([Paths](project-properties-paths.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-paths.md "https://weme-ui.github.io/schema/project.schema.json#/properties/paths")

### paths Type

`object` ([Paths](project-properties-paths.md))

## unocss

The UnoCSS Preset options.

`unocss`

* is optional

* Type: `object` ([UnoCSS Preset Options](project-properties-unocss-preset-options.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss")

### unocss Type

`object` ([UnoCSS Preset Options](project-properties-unocss-preset-options.md))

## items

The installed items for the project.

`items`

* is optional

* Type: `object` ([Installed items](project-properties-installed-items.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-installed-items.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items")

### items Type

`object` ([Installed items](project-properties-installed-items.md))
