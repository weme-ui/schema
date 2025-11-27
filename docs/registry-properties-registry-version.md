# Registry version Schema

```txt
https://weme-ui.github.io/schema/registry.schema.json#/properties/version
```

The version of the registry. Empty to use the version from `package.json`.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [registry.schema.json\*](../registry.schema.json "open original schema") |

## version Type

`string` ([Registry version](registry-properties-registry-version.md))

## version Constraints

**unknown format**: the value of this string must follow the format: `semver`

## version Examples

```json
"1.0.0"
```
