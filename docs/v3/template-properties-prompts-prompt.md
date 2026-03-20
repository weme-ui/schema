# Prompt Schema

```txt
https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items
```

A variant of the prompt.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [template.schema.json\*](../../v3/template.schema.json "open original schema") |

## items Type

`object` ([Prompt](template-properties-prompts-prompt.md))

# items Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [use](#use)         | `array`  | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-template.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/use")    |
| [type](#type)       | `string` | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-type.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/type")       |
| [name](#name)       | `string` | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-name.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/name")       |
| [message](#message) | `string` | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-message.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/message") |
| [initial](#initial) | `string` | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-initial.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/initial") |
| [choices](#choices) | `array`  | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-choices.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/choices") |
| [hint](#hint)       | `string` | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-hint.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/hint")       |

## use

Which template this prompt belongs to.

`use`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-template.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/use")

### use Type

`string[]`

## type

The type of the prompt.

`type`

* is required

* Type: `string` ([Prompt Type](template-properties-prompts-prompt-properties-prompt-type.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-type.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/type")

### type Type

`string` ([Prompt Type](template-properties-prompts-prompt-properties-prompt-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"text"`        |             |
| `"number"`      |             |
| `"confirm"`     |             |
| `"list"`        |             |
| `"select"`      |             |
| `"multiselect"` |             |

## name

The name of the prompt.

`name`

* is required

* Type: `string` ([Prompt Name](template-properties-prompts-prompt-properties-prompt-name.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-name.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/name")

### name Type

`string` ([Prompt Name](template-properties-prompts-prompt-properties-prompt-name.md))

## message

The message of the prompt.

`message`

* is optional

* Type: `string` ([Prompt Message](template-properties-prompts-prompt-properties-prompt-message.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-message.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/message")

### message Type

`string` ([Prompt Message](template-properties-prompts-prompt-properties-prompt-message.md))

## initial

The initial value of the prompt.

`initial`

* is optional

* Type: `string` ([Prompt Initial](template-properties-prompts-prompt-properties-prompt-initial.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-initial.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/initial")

### initial Type

`string` ([Prompt Initial](template-properties-prompts-prompt-properties-prompt-initial.md))

## choices

The choices of the prompt.

`choices`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-choices.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/choices")

### choices Type

`string[]`

### choices Examples

```json
[
  "default",
  "react",
  "vue"
]
```

## hint

The hint of the prompt.

`hint`

* is optional

* Type: `string` ([Prompt Hint](template-properties-prompts-prompt-properties-prompt-hint.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts-prompt-properties-prompt-hint.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts/items/properties/hint")

### hint Type

`string` ([Prompt Hint](template-properties-prompts-prompt-properties-prompt-hint.md))

### hint Examples

```json
"Enter your project name"
```
