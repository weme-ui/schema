# Registry version Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/version
```

Version of the repository.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## version Type

`string` ([Registry version](project-properties-repos-repo-properties-registry-version.md))

## version Constraints

**unknown format**: the value of this string must follow the format: `semver`

## version Examples

```json
"1.0.0"
```
