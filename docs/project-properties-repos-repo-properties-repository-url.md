# Repository URL Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/repo
```

The URL of the repository.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## repo Type

`string` ([Repository URL](project-properties-repos-repo-properties-repository-url.md))

## repo Constraints

**unknown format**: the value of this string must follow the format: `url`

## repo Default Value

The default value is:

```json
"https://github.com/weme-ui/weme-ui"
```
