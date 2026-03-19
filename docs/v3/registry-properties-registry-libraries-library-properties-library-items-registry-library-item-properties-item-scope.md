# Item Scope Schema

```txt
https://weme-ui.github.io/schema/v3/registry.schema.json#/properties/libraries/items/properties/items/items/properties/scope
```

The scope of the registry library item.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v3/registry.schema.json "open original schema") |

## scope Type

`string` ([Item Scope](registry-properties-registry-libraries-library-properties-library-items-registry-library-item-properties-item-scope.md))

## scope Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"component"` |             |
| `"layout"`    |             |
| `"theme"`     |             |
| `"plugin"`    |             |
| `"page"`      |             |

## scope Examples

```json
"component"
```
