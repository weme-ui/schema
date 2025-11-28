# Registry name Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/items/additionalProperties/propertyNames
```

The registry name.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## propertyNames Type

`string` ([Registry name](project-properties-installed-items-additionalproperties-registry-name.md))

## propertyNames Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")
