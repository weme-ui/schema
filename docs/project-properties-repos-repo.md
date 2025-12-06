# Repo Schema

```txt
https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items
```

The repository configuration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](../project.schema.json "open original schema") |

## items Type

`object` ([Repo](project-properties-repos-repo.md))

# items Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :-------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [repo](#repo)         | `string`  | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-repository-url.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/repo")         |
| [registry](#registry) | `string`  | Required | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-registry-name.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/registry")      |
| [prefix](#prefix)     | `string`  | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-registry-item-prefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/prefix") |
| [default](#default)   | `boolean` | Optional | cannot be null | [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-default-registry.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/default")    |

## repo

The URL of the repository.

`repo`

* is optional

* Type: `string` ([Repository URL](project-properties-repos-repo-properties-repository-url.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-repository-url.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/repo")

### repo Type

`string` ([Repository URL](project-properties-repos-repo-properties-repository-url.md))

### repo Constraints

**unknown format**: the value of this string must follow the format: `url`

### repo Default Value

The default value is:

```json
"https://github.com/weme-ui/weme-ui"
```

## registry

This is the name of the registry. It should be `<repo>/<scope>` format.

`registry`

* is required

* Type: `string` ([Registry name](project-properties-repos-repo-properties-registry-name.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-registry-name.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/registry")

### registry Type

`string` ([Registry name](project-properties-repos-repo-properties-registry-name.md))

### registry Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[^A-Z]*\/[^A-Z]*$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5EA-Z%5D*%5C%2F%5B%5EA-Z%5D*%24 "try regular expression with regexr.com")

## prefix

The prefix for the registry item's files. Add components to `${paths.components}/ui` -> `UiComponentName`

`prefix`

* is optional

* Type: `string` ([Registry item prefix](project-properties-repos-repo-properties-registry-item-prefix.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-registry-item-prefix.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/prefix")

### prefix Type

`string` ([Registry item prefix](project-properties-repos-repo-properties-registry-item-prefix.md))

### prefix Default Value

The default value is:

```json
"ui"
```

## default

Whether to use this registry as the default one.

`default`

* is optional

* Type: `boolean` ([Default registry](project-properties-repos-repo-properties-default-registry.md))

* cannot be null

* defined in: [Weme UI Project JSON Schema Definitions](project-properties-repos-repo-properties-default-registry.md "https://weme-ui.github.io/schema/project.schema.json#/properties/repos/items/properties/default")

### default Type

`boolean` ([Default registry](project-properties-repos-repo-properties-default-registry.md))

### default Default Value

The default value is:

```json
false
```
