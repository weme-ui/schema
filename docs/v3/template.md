# Weme UI Skeleton Template JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/template.schema.json
```

This schema defines the structure of the skeleton template JSON file used in Weme UI CLI `init` command.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [template.schema.json](../../v3/template.schema.json "open original schema") |

## Weme UI Skeleton Template JSON Schema Definitions (v3) Type

`object` ([Weme UI Skeleton Template JSON Schema Definitions (v3)](template.md))

# Weme UI Skeleton Template JSON Schema Definitions (v3) Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)      | `string` | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-template-schema-url.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/$schema") |
| [templates](#templates) | `array`  | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates")         |
| [prompts](#prompts)     | `array`  | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts")             |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v3/template.schema.json`

`$schema`

* is required

* Type: `string` ([Template Schema URL](template-properties-template-schema-url.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-template-schema-url.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/$schema")

### $schema Type

`string` ([Template Schema URL](template-properties-template-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v3/template.schema.json"
```

### $schema Examples

```json
"https://weme-ui.github.io/schema/v3/template.schema.json"
```

## templates

The templates of the skeleton.

`templates`

* is required

* Type: `object[]` ([Template](template-properties-templates-template.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates")

### templates Type

`object[]` ([Template](template-properties-templates-template.md))

## prompts

The prompts of the skeleton.

`prompts`

* is optional

* Type: `object[]` ([Prompt](template-properties-prompts-prompt.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-prompts.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/prompts")

### prompts Type

`object[]` ([Prompt](template-properties-prompts-prompt.md))
