# Registry name Schema

```txt
https://weme-ui.github.io/schema/repository.schema.json#/properties/registries/items/properties/name
```

The name of the registry. It should be `<owner>/<repo>` format.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [repository.schema.json\*](../repository.schema.json "open original schema") |

## name Type

`string` ([Registry name](repository-properties-registries-registry-properties-registry-name.md))

## name Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## name Examples

```json
"weme-ui/std"
```
