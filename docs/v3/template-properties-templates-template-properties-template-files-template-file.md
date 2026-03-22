# Template File Schema

```txt
https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files/items
```

A file in the template.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [template.schema.json\*](../../v3/template.schema.json "open original schema") |

## items Type

`object` ([Template File](template-properties-templates-template-properties-template-files-template-file.md))

# items Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                     |
| :------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [src](#src)   | `string` | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-files-template-file-properties-template-file-source.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files/items/properties/src")       |
| [dest](#dest) | `string` | Required | cannot be null | [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-files-template-file-properties-template-file-destination.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files/items/properties/dest") |

## src

The source of the template file.

`src`

* is required

* Type: `string` ([Template File Source](template-properties-templates-template-properties-template-files-template-file-properties-template-file-source.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-files-template-file-properties-template-file-source.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files/items/properties/src")

### src Type

`string` ([Template File Source](template-properties-templates-template-properties-template-files-template-file-properties-template-file-source.md))

### src Examples

```json
"templates/default/{name}.md"
```

## dest

The destination of the template file.

`dest`

* is required

* Type: `string` ([Template File Destination](template-properties-templates-template-properties-template-files-template-file-properties-template-file-destination.md))

* cannot be null

* defined in: [Weme UI Skeleton Template JSON Schema Definitions (v3)](template-properties-templates-template-properties-template-files-template-file-properties-template-file-destination.md "https://weme-ui.github.io/schema/v3/template.schema.json#/properties/templates/items/properties/files/items/properties/dest")

### dest Type

`string` ([Template File Destination](template-properties-templates-template-properties-template-files-template-file-properties-template-file-destination.md))

### dest Examples

```json
"{name}.md"
```
