# Registry Item Scope Schema

```txt
https://weme-ui.github.io/schema/v2/manifest.schema.json#/properties/items/items/properties/scope
```

The scope of the registry item.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [manifest.schema.json\*](../../v2/manifest.schema.json "open original schema") |

## scope Type

`string` ([Registry Item Scope](manifest-properties-manifest-items-manifest-item-properties-registry-item-scope.md))

## scope Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"init"`      |             |
| `"component"` |             |
| `"layout"`    |             |
| `"theme"`     |             |
| `"page"`      |             |
| `"plugin"`    |             |
