# Variable prefix Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/unocss/properties/variablePrefix
```

The prefix for the CSS variables.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [project.schema.json\*](../../v1/project.schema.json "open original schema") |

## variablePrefix Type

`string` ([Variable prefix](project-properties-unocss-preset-options-properties-variable-prefix.md))

## variablePrefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## variablePrefix Default Value

The default value is:

```json
"ui"
```
