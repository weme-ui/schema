# Library Schema

```txt
https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items
```

A library in the registry.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [registry.schema.json\*](../../v3/registry.schema.json "open original schema") |

## items Type

`object` ([Library](registry-properties-registry-libraries-library.md))

# items Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                           |
| :------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                   | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-name.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/name")                    |
| [description](#description)     | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-description.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/description")      |
| [defaultPrefix](#defaultprefix) | `string` | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-default-library-prefix.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/defaultPrefix") |
| [items](#items)                 | `array`  | Required | cannot be null | [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items")                  |

## name

The name of the library.

`name`

* is required

* Type: `string` ([Library Name](registry-properties-registry-libraries-library-properties-library-name.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-name.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/name")

### name Type

`string` ([Library Name](registry-properties-registry-libraries-library-properties-library-name.md))

### name Examples

```json
"slim"
```

## description

The description of the library.

`description`

* is optional

* Type: `string` ([Library Description](registry-properties-registry-libraries-library-properties-library-description.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-description.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/description")

### description Type

`string` ([Library Description](registry-properties-registry-libraries-library-properties-library-description.md))

## defaultPrefix

The default prefix of the library.

`defaultPrefix`

* is required

* Type: `string` ([Default Library Prefix](registry-properties-registry-libraries-library-properties-default-library-prefix.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-default-library-prefix.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/defaultPrefix")

### defaultPrefix Type

`string` ([Default Library Prefix](registry-properties-registry-libraries-library-properties-default-library-prefix.md))

### defaultPrefix Default Value

The default value is:

```json
"ui"
```

### defaultPrefix Examples

```json
"ui"
```

## items

The items in the library.

`items`

* is required

* Type: `object[]` ([Registry Library Item](registry-properties-registry-libraries-library-properties-library-items-registry-library-item.md))

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions (v3)](registry-properties-registry-libraries-library-properties-library-items.md "https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items")

### items Type

`object[]` ([Registry Library Item](registry-properties-registry-libraries-library-properties-library-items-registry-library-item.md))
