# Weme UI Manifest JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/manifest.schema.json
```

This schema defines the structure of the manifest JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [manifest.schema.json](../../v3/manifest.schema.json "open original schema") |

## Weme UI Manifest JSON Schema Definitions (v3) Type

`object` ([Weme UI Manifest JSON Schema Definitions (v3)](manifest.md))

# Weme UI Manifest JSON Schema Definitions (v3) Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                                                                                 |
| :----------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema) | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-schema-url.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/$schema") |
| [items](#items)    | `array`  | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items")           |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v3/manifest.schema.json`

`$schema`

* is required

* Type: `string` ([Manifest Schema URL](manifest-properties-manifest-schema-url.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-manifest-schema-url.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/$schema")

### $schema Type

`string` ([Manifest Schema URL](manifest-properties-manifest-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v3/manifest.schema.json"
```

### $schema Examples

```json
"https://weme-ui.github.io/schema/v3/manifest.schema.json"
```

## items

The added items in the project.

`items`

* is optional

* Type: `object[]` ([Added Registry Item](manifest-properties-added-items-added-registry-item.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items")

### items Type

`object[]` ([Added Registry Item](manifest-properties-added-items-added-registry-item.md))
