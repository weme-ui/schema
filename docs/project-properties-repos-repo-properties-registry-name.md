# Registry name Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/registry
```

This is the name of the registry. It should be `<owner>/<repo>/<scope>` format.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## registry Type

`string` ([Registry name](project-properties-repos-repo-properties-registry-name.md))

## registry Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")
