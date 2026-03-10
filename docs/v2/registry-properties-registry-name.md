# Registry Name Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/name
```

The name of the registry, in the format of `repo/registry`.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## name Type

`string` ([Registry Name](registry-properties-registry-name.md))

## name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*(\/)[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*\(%5C%2F\)%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")
