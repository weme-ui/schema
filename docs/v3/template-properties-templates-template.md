# Template Schema

```txt
https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items
```

A variant of the template.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [template.schema.json\*](../../v3/template.schema.json "open original schema") |

## items Type

`object` ([Template](template-properties-templates-template.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                        |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)               | `string` | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-name.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/name")               |
| [description](#description) | `string` | Optional | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-description.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/description") |
| [files](#files)             | `array`  | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-files.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files")             |

## name

The name of the template.

`name`

* is required

* Type: `string` ([Template Name](template-properties-templates-template-properties-template-name.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-name.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/name")

### name Type

`string` ([Template Name](template-properties-templates-template-properties-template-name.md))

## description

The description of the template.

`description`

* is optional

* Type: `string` ([Template Description](template-properties-templates-template-properties-template-description.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-description.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/description")

### description Type

`string` ([Template Description](template-properties-templates-template-properties-template-description.md))

## files

The files of the template.

`files`

* is required

* Type: `object[]` ([Template File](template-properties-templates-template-properties-template-files-template-file.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-files.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files")

### files Type

`object[]` ([Template File](template-properties-templates-template-properties-template-files-template-file.md))
