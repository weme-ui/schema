# Untitled object in Weme UI Registry JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json#/properties/meta
```

Additional metadata for the registry.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [registry.schema.json\*](../registry.schema.json "open original schema") |

## meta Type

`object` ([Details](registry-properties-meta.md))

# meta Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [authors](#authors)       | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-authors.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/authors")       |
| [homepage](#homepage)     | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-homepage.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/homepage")     |
| [repository](#repository) | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-repository.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/repository") |
| [bugs](#bugs)             | `string` | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-bugs.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/bugs")             |
| [tags](#tags)             | `array`  | Optional | cannot be null | [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-tags.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/tags")             |

## authors

The authors of the registry.

`authors`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-authors.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/authors")

### authors Type

`string[]`

## homepage

The homepage of the registry.

`homepage`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-homepage.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/homepage")

### homepage Type

`string`

### homepage Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## repository

The repository of the registry.

`repository`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-repository.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/repository")

### repository Type

`string`

### repository Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## bugs

The bugs page of the registry.

`bugs`

* is optional

* Type: `string`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-bugs.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/bugs")

### bugs Type

`string`

### bugs Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## tags

The tags of the registry.

`tags`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Weme UI Registry JSON Schema Definitions](registry-properties-meta-properties-tags.md "https://weme-ui.github.io/schema/registry.schema.json#/properties/meta/properties/tags")

### tags Type

`string[]`
