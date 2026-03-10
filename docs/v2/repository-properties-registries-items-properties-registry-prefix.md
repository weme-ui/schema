# Registry Prefix Schema

```txt
https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items/properties/prefix
```

The prefix of the components from this registry.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [repository.schema.json\*](../../v2/repository.schema.json "open original schema") |

## prefix Type

`string` ([Registry Prefix](repository-properties-registries-items-properties-registry-prefix.md))

## prefix Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`
