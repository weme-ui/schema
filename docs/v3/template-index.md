# Weme UI Skeleton Template Index JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/template-index.schema.json
```

This schema defines the structure of the skeleton template index JSON file.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [template-index.schema.json](../../v3/template-index.schema.json "open original schema") |

## Weme UI Skeleton Template Index JSON Schema Definitions (v3) Type

`object` ([Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index.md))

# Weme UI Skeleton Template Index JSON Schema Definitions (v3) Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)          | `string` | Required | cannot be null | [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-schema-url.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/$schema")      |
| [description](#description) | `string` | Required | cannot be null | [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-description.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/description") |
| [templates](#templates)     | `object` | Required | cannot be null | [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-templates.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates")     |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v3/template-index.schema.json`

`$schema`

* is required

* Type: `string` ([Template Index Schema URL](template-index-properties-template-index-schema-url.md))

* cannot be null

* defined in: [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-schema-url.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/$schema")

### $schema Type

`string` ([Template Index Schema URL](template-index-properties-template-index-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v3/template-index.schema.json"
```

### $schema Examples

```json
"https://weme-ui.github.io/schema/v3/template-index.schema.json"
```

## description

The description of the template index.

`description`

* is required

* Type: `string` ([Template Index Description](template-index-properties-template-index-description.md))

* cannot be null

* defined in: [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-description.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/description")

### description Type

`string` ([Template Index Description](template-index-properties-template-index-description.md))

### description Examples

```json
"Weme UI Default Templates"
```

## templates

The templates in the template index.

`templates`

* is required

* Type: `object` ([Template Index Templates](template-index-properties-template-index-templates.md))

* cannot be null

* defined in: [Weme UI Skeleton Template Index JSON Schema Definitions (v3)](template-index-properties-template-index-templates.md "https://weme-ui.github.io/schema/v3/template-index.schema.json#/properties/templates")

### templates Type

`object` ([Template Index Templates](template-index-properties-template-index-templates.md))
