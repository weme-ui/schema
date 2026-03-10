# Registry Item File Type Schema

```txt
https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/files/items/properties/type
```

The type of the registry item file.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [manifest.schema.json\*](../../v2/manifest.schema.json "open original schema") |

## type Type

`string` ([Registry Item File Type](manifest-properties-manifest-items-manifest-item-properties-manifest-item-files-manifest-item-file-properties-registry-item-file-type.md))

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
| `"file"`       |             |
