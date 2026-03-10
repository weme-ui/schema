# Repository Owner Schema

```txt
https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/owner
```

The owner of the repository.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [repository.schema.json\*](../../v2/repository.schema.json "open original schema") |

## owner Type

`string` ([Repository Owner](repository-properties-repository-owner.md))

## owner Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`
