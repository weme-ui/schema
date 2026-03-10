# Registry Item Name Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/name
```

The name of the registry item, which should be unique in the registry.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## name Type

`string` ([Registry Item Name](registry-properties-registry-items-items-properties-registry-item-name.md))

## name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`
