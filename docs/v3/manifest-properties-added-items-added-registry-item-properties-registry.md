# Untitled object in Weme UI Manifest JSON Schema Definitions (v3) Schema

```txt
https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [manifest.schema.json\*](../../v3/manifest.schema.json "open original schema") |

## registry Type

`object` ([Details](manifest-properties-added-items-added-registry-item-properties-registry.md))

# registry Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-name.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry/properties/name")       |
| [version](#version) | `string` | Required | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-version.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry/properties/version") |
| [hash](#hash)       | `string` | Optional | cannot be null | [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-hash.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry/properties/hash")       |

## name

The name of the registry, in the format of `owner/repo`.

`name`

* is required

* Type: `string` ([Registry Name](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-name.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry/properties/name")

### name Type

`string` ([Registry Name](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-name.md))

### name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[\s\S]{0,}(\/)[\s\S]{0,}$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5Cs%5CS%5D%7B0%2C%7D\(%5C%2F\)%5B%5Cs%5CS%5D%7B0%2C%7D%24 "try regular expression with regexr.com")

### name Examples

```json
"weme-ui/weme-ui"
```

## version

The version of the registry.

`version`

* is required

* Type: `string` ([Registry Version](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-version.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-version.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry/properties/version")

### version Type

`string` ([Registry Version](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-version.md))

### version Default Value

The default value is:

```json
"1.0.0"
```

### version Examples

```json
"1.0.0"
```

## hash

The SHA1 hash of the registry, DO NOT edit this manually.

`hash`

* is optional

* Type: `string` ([Registry Hash](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-hash.md))

* cannot be null

* defined in: [Weme UI Manifest JSON Schema Definitions (v3)](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-hash.md "https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/registry/properties/hash")

### hash Type

`string` ([Registry Hash](manifest-properties-added-items-added-registry-item-properties-registry-properties-registry-hash.md))
