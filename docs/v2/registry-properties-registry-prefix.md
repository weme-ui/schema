# Registry Prefix Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/prefix
```

The prefix of the components from this registry.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## prefix Type

`string` ([Registry Prefix](registry-properties-registry-prefix.md))

## prefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`
