# Registry Schema URL Schema

```txt
https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/$schema
```

The Schema URL, which should be `https://weme-ui.github.io/schema/v2/registry.schema.json`

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../../v2/registry.schema.json "open original schema") |

## $schema Type

`string` ([Registry Schema URL](registry-properties-registry-schema-url.md))

## $schema Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

**unknown format**: the value of this string must follow the format: `lowercase`

## $schema Default Value

The default value is:

```json
"https://weme-ui.github.io/schema/v2/registry.schema.json"
```
