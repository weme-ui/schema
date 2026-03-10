# Registry URL Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/url
```

The URL of the registry, which should point to the registry's `registry.json` file.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## url Type

`string` ([Registry URL](registry-properties-registry-url.md))

## url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`
