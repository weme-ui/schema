# Project Paths Schema

```txt
https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths
```

The paths used in the project.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [config.schema.json\*](../../v3/config.schema.json "open original schema") |

## paths Type

`object` ([Project Paths](config-properties-project-paths.md))

# paths Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                              |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [components](#components)   | `string` | Required | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-components-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/components")   |
| [composables](#composables) | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-composables-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/composables") |
| [layouts](#layouts)         | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-layouts-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/layouts")         |
| [plugins](#plugins)         | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-plugins-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/plugins")         |
| [themes](#themes)           | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-themes-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/themes")           |
| [pages](#pages)             | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-pages-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/pages")             |
| [types](#types)             | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-types-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/types")             |
| [utils](#utils)             | `string` | Optional | cannot be null | [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-utils-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/utils")             |

## components

The path of the components directory.

`components`

* is required

* Type: `string` ([Components Path](config-properties-project-paths-properties-components-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-components-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/components")

### components Type

`string` ([Components Path](config-properties-project-paths-properties-components-path.md))

### components Default Value

The default value is:

```json
"~/components"
```

### components Examples

```json
"~/components"
```

## composables

The path of the composables directory.

`composables`

* is optional

* Type: `string` ([Composables Path](config-properties-project-paths-properties-composables-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-composables-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/composables")

### composables Type

`string` ([Composables Path](config-properties-project-paths-properties-composables-path.md))

### composables Examples

```json
"~/composables"
```

## layouts

The path of the layouts directory.

`layouts`

* is optional

* Type: `string` ([Layouts Path](config-properties-project-paths-properties-layouts-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-layouts-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/layouts")

### layouts Type

`string` ([Layouts Path](config-properties-project-paths-properties-layouts-path.md))

### layouts Examples

```json
"~/layouts"
```

## plugins

The path of the plugins directory.

`plugins`

* is optional

* Type: `string` ([Plugins Path](config-properties-project-paths-properties-plugins-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-plugins-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/plugins")

### plugins Type

`string` ([Plugins Path](config-properties-project-paths-properties-plugins-path.md))

### plugins Examples

```json
"~/plugins"
```

## themes

The path of the themes directory.

`themes`

* is optional

* Type: `string` ([Themes Path](config-properties-project-paths-properties-themes-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-themes-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/themes")

### themes Type

`string` ([Themes Path](config-properties-project-paths-properties-themes-path.md))

### themes Examples

```json
"~/themes"
```

## pages

The path of the pages directory.

`pages`

* is optional

* Type: `string` ([Pages Path](config-properties-project-paths-properties-pages-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-pages-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/pages")

### pages Type

`string` ([Pages Path](config-properties-project-paths-properties-pages-path.md))

### pages Examples

```json
"~/pages"
```

## types

The path of the types directory.

`types`

* is optional

* Type: `string` ([Types Path](config-properties-project-paths-properties-types-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-types-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/types")

### types Type

`string` ([Types Path](config-properties-project-paths-properties-types-path.md))

### types Examples

```json
"~/types"
```

## utils

The path of the utils directory.

`utils`

* is optional

* Type: `string` ([Utils Path](config-properties-project-paths-properties-utils-path.md))

* cannot be null

* defined in: [Weme UI Project Config JSON Schema Definitions (v3)](config-properties-project-paths-properties-utils-path.md "https://weme-ui.github.io/schema/v3/config.schema.json#/properties/paths/properties/utils")

### utils Type

`string` ([Utils Path](config-properties-project-paths-properties-utils-path.md))

### utils Examples

```json
"~/utils"
```
