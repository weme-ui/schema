# UnoCSS Preset Options Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/unocss
```

The UnoCSS Preset options.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## unocss Type

`object` ([UnoCSS Preset Options](project-properties-unocss-preset-options.md))

# unocss Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                            |
| :-------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [variablePrefix](#variableprefix) | `string` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-variable-prefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/variablePrefix") |
| [accentColors](#accentcolors)     | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-accent-colors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/accentColors")     |
| [neutralColors](#neutralcolors)   | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-neutral-colors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/neutralColors")   |
| [cssVars](#cssvars)               | `object` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-custom-css-variables.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/cssVars")   |

## variablePrefix

The prefix for the CSS variables.

`variablePrefix`

* is optional

* Type: `string` ([Variable prefix](project-properties-unocss-preset-options-properties-variable-prefix.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-variable-prefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/variablePrefix")

### variablePrefix Type

`string` ([Variable prefix](project-properties-unocss-preset-options-properties-variable-prefix.md))

### variablePrefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

### variablePrefix Default Value

The default value is:

```json
"ui"
```

## accentColors

The custom accent colors for the project.

`accentColors`

* is optional

* Type: `object` ([Accent colors](project-properties-unocss-preset-options-properties-accent-colors.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-accent-colors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/accentColors")

### accentColors Type

`object` ([Accent colors](project-properties-unocss-preset-options-properties-accent-colors.md))

## neutralColors

The custom neutral colors for the project.

`neutralColors`

* is optional

* Type: `object` ([Neutral colors](project-properties-unocss-preset-options-properties-neutral-colors.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-neutral-colors.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/neutralColors")

### neutralColors Type

`object` ([Neutral colors](project-properties-unocss-preset-options-properties-neutral-colors.md))

## cssVars

The custom CSS variables for the project.

`cssVars`

* is optional

* Type: `object` ([Custom CSS variables](project-properties-unocss-preset-options-properties-custom-css-variables.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-unocss-preset-options-properties-custom-css-variables.md "https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/cssVars")

### cssVars Type

`object` ([Custom CSS variables](project-properties-unocss-preset-options-properties-custom-css-variables.md))
