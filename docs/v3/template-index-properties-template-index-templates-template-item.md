# Template Item Schema

```txt
https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates/additionalProperties
```

A template item in the template index.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [template-index.schema.json\*](../../v3/template-index.schema.json "open original schema") |

## additionalProperties Type

`object` ([Template Item](template-index-properties-template-index-templates-template-item.md))

# additionalProperties Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [description](#description) | `string` | Required | cannot be null | [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-templates-template-item-properties-template-item-description.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates/additionalProperties/properties/description") |
| [schema](#schema)           | `string` | Required | cannot be null | [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-templates-template-item-properties-template-item-schema-path.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates/additionalProperties/properties/schema")      |

## description

The description of the template item.

`description`

* is required

* Type: `string` ([Template Item Description](template-index-properties-template-index-templates-template-item-properties-template-item-description.md))

* cannot be null

* defined in: [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-templates-template-item-properties-template-item-description.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates/additionalProperties/properties/description")

### description Type

`string` ([Template Item Description](template-index-properties-template-index-templates-template-item-properties-template-item-description.md))

### description Examples

```json
"Default template for Weme UI projects"
```

## schema

The path of the template schema file.

`schema`

* is required

* Type: `string` ([Template Item Schema Path](template-index-properties-template-index-templates-template-item-properties-template-item-schema-path.md))

* cannot be null

* defined in: [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-templates-template-item-properties-template-item-schema-path.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates/additionalProperties/properties/schema")

### schema Type

`string` ([Template Item Schema Path](template-index-properties-template-index-templates-template-item-properties-template-item-schema-path.md))

### schema Examples

```json
"project/schema.json"
```
