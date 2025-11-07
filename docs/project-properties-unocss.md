# Untitled object in Weme UI Project JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/unocss
```

The UnoCSS Preset options.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## unocss Type

`object` ([Details](project-properties-unocss.md))

# unocss Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :-------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [variablePrefix](#variableprefix) | `string` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-variableprefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/variablePrefix") |
| [accentColors](#accentcolors)     | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-accentcolors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/accentColors")     |
| [neutralColors](#neutralcolors)   | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-neutralcolors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/neutralColors")   |
| [cssVars](#cssvars)               | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-cssvars.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/cssVars")               |

## variablePrefix

The prefix for the CSS variables.

`variablePrefix`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-variableprefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/variablePrefix")

### variablePrefix Type

`string`

### variablePrefix Default Value

The default value is:

```json
"ui"
```

## accentColors

The custom accent colors for the project.

`accentColors`

* is optional

* Type: `object` ([Details](project-properties-unocss-properties-accentcolors.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-accentcolors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/accentColors")

### accentColors Type

`object` ([Details](project-properties-unocss-properties-accentcolors.md))

## neutralColors

The custom neutral colors for the project.

`neutralColors`

* is optional

* Type: `object` ([Details](project-properties-unocss-properties-neutralcolors.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-neutralcolors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/neutralColors")

### neutralColors Type

`object` ([Details](project-properties-unocss-properties-neutralcolors.md))

## cssVars

The custom CSS variables for the project.

`cssVars`

* is optional

* Type: `object` ([Details](project-properties-unocss-properties-cssvars.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-properties-cssvars.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/cssVars")

### cssVars Type

`object` ([Details](project-properties-unocss-properties-cssvars.md))
