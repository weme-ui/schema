# Weme UI Manifest JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/v2/manifest.schema.json
```

This schema defines the structure of the manifest JSON file used in Weme UI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [manifest.schema.json](../../v2/manifest.schema.json "open original schema") |

## Weme UI Manifest JSON Schema Definitions Type

`object` ([Weme UI Manifest JSON Schema Definitions](manifest.md))

# Weme UI Manifest JSON Schema Definitions Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)        | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-schema-url.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/$schema") |
| [lastUpdate](#lastupdate) | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-last-update.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/lastUpdate")      |
| [items](#items)           | `array`  | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items")        |

## $schema

The Schema URL, which should be `https://weme-ui.github.io/schema/v2/manifest.schema.json`

`$schema`

* is required

* Type: `string` ([Manifest Schema URL](manifest-properties-manifest-schema-url.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-schema-url.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/$schema")

### $schema Type

`string` ([Manifest Schema URL](manifest-properties-manifest-schema-url.md))

### $schema Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v2/manifest.schema.json"
```

## lastUpdate

The last update time of the manifest.

`lastUpdate`

* is required

* Type: `string` ([Last Update](manifest-properties-last-update.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-last-update.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/lastUpdate")

### lastUpdate Type

`string` ([Last Update](manifest-properties-last-update.md))

### lastUpdate Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d\.\d{3}(?:Z))$
```

[try pattern](https://regexr.com/?expression=%5E\(%3F%3A\(%3F%3A%5Cd%5Cd%5B2468%5D%5B048%5D%7C%5Cd%5Cd%5B13579%5D%5B26%5D%7C%5Cd%5Cd0%5B48%5D%7C%5B02468%5D%5B048%5D00%7C%5B13579%5D%5B26%5D00\)-02-29%7C%5Cd%7B4%7D-\(%3F%3A\(%3F%3A0%5B13578%5D%7C1%5B02%5D\)-\(%3F%3A0%5B1-9%5D%7C%5B12%5D%5Cd%7C3%5B01%5D\)%7C\(%3F%3A0%5B469%5D%7C11\)-\(%3F%3A0%5B1-9%5D%7C%5B12%5D%5Cd%7C30\)%7C\(%3F%3A02\)-\(%3F%3A0%5B1-9%5D%7C1%5Cd%7C2%5B0-8%5D\)\)\)T\(%3F%3A\(%3F%3A%5B01%5D%5Cd%7C2%5B0-3%5D\)%3A%5B0-5%5D%5Cd%3A%5B0-5%5D%5Cd%5C.%5Cd%7B3%7D\(%3F%3AZ\)\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## items

The items in the manifest.

`items`

* is required

* Type: `object[]` ([Manifest Item](manifest-properties-manifest-items-manifest-item.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions](manifest-properties-manifest-items.md "https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items")

### items Type

`object[]` ([Manifest Item](manifest-properties-manifest-items-manifest-item.md))
