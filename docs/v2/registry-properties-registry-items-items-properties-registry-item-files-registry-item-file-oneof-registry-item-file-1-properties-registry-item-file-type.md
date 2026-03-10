# Registry Item File Type Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1/properties/type
```

The type of the registry item file.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## type Type

`string` ([Registry Item File Type](registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1-properties-registry-item-file-type.md))

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"component"`  |             |
| `"type"`       |             |
| `"style"`      |             |
| `"locale"`     |             |
| `"composable"` |             |
| `"utility"`    |             |
