# Prompt Type Schema

```txt
https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/type
```

The type of the prompt.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [template.schema.json\*](../../v3/template.schema.json "open original schema") |

## type Type

`string` ([Prompt Type](template-properties-prompts-prompt-properties-prompt-type.md))

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"text"`        |             |
| `"number"`      |             |
| `"confirm"`     |             |
| `"list"`        |             |
| `"select"`      |             |
| `"multiselect"` |             |

## type Examples

```json
"text"
```
