# Repository version Schema

```txt
https://weme-ui.github.io/schema/repository.schema.json#/properties/version
```

The version of the repository.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [repository.schema.json\*](../repository.schema.json "open original schema") |

## version Type

`string` ([Repository version](repository-properties-repository-version.md))

## version Constraints

**unknown format**: the value of this string must follow the format: `semver`

## version Examples

```json
"1.0.0"
```
