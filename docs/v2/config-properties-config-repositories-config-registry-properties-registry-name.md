# Registry Name Schema

```txt
https://weme-ui.github.io/schema/v2/config.schema.json#/properties/repos/items/properties/registry
```

The name of the registry, in the format of `repo/registry`.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [config.schema.json\*](../../v2/config.schema.json "open original schema") |

## registry Type

`string` ([Registry Name](config-properties-config-repositories-config-registry-properties-registry-name.md))

## registry Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*(\/)[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*\(%5C%2F\)%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")
