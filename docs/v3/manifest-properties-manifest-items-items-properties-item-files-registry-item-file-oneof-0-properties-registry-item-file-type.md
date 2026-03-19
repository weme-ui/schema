# Registry Item File Type Schema

```txt
https://weme-ui.github.io/schema/v3/manifest.schema.json#/properties/items/items/properties/files/items/oneOf/0/properties/type
```

The type of the registry item file.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [manifest.schema.json\*](../../v3/manifest.schema.json "open original schema") |

## type Type

`string` ([Registry Item File Type](manifest-properties-manifest-items-items-properties-item-files-registry-item-file-oneof-0-properties-registry-item-file-type.md))

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"file"` |             |

## type Examples

```json
"file"
```
