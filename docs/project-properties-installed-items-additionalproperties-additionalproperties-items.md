# Untitled object in Weme UI Project JSON Schema Definitions Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## items Type

`object` ([Details](project-properties-installed-items-additionalproperties-additionalproperties-items.md))

# items Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                     |
| :------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name) | `string` | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-name.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items/properties/name") |
| [type](#type) | `string` | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-type.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items/properties/type") |
| [path](#path) | `string` | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-path.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items/properties/path") |

## name

The name of the item.

`name`

* is required

* Type: `string` ([Item name](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-name.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-name.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items/properties/name")

### name Type

`string` ([Item name](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-name.md))

## type

The type of the item.

`type`

* is required

* Type: `string` ([Item type](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-type.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-type.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items/properties/type")

### type Type

`string` ([Item type](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"component"` |             |
| `"layout"`    |             |
| `"theme"`     |             |
| `"block"`     |             |
| `"page"`      |             |
| `"init"`      |             |

## path

The path to the item.

`path`

* is required

* Type: `string` ([Item path](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-path.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-path.md "https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/additionalProperties/items/properties/path")

### path Type

`string` ([Item path](project-properties-installed-items-additionalproperties-additionalproperties-items-properties-item-path.md))
