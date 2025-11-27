# Registry name Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json#/properties/name
```

The name of the registry.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../registry.schema.json "open original schema") |

## name Type

`string` ([Registry name](registry-properties-registry-name.md))

## name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

## name Examples

```json
"weme-ui/std"
```

```json
"weme-ui/plus"
```
