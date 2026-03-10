# README

## Top-level Schemas

* [Weme UI Project Config JSON Schema Definitions](./config.md "This schema defines the structure of the project config JSON file used in Weme UI") – `https://weme-ui.github.io/schema/v2/config.schema.json`

* [Weme UI Registry JSON Schema Definitions](./registry.md "This schema defines the structure of the registry JSON file used in Weme UI") – `https://weme-ui.github.io/schema/v2/registry.schema.json`

* [Weme UI Repository JSON Schema Definitions](./repository.md "This schema defines the structure of the repository JSON file used in Weme UI") – `https://weme-ui.github.io/schema/v2/repository.schema.json`

## Other Schemas

### Objects

* [Config Paths](./config-properties-config-paths.md "The paths used in the project config") – `https://weme-ui.github.io/schema/v2/config.schema.json#/properties/paths`

* [Config Registry](./config-properties-config-repositories-config-registry.md "A registry used in the project config") – `https://weme-ui.github.io/schema/v2/config.schema.json#/properties/repos/items`

* [Registry Item CSS Variables](./registry-properties-registry-items-items-properties-registry-item-css-variables.md "The CSS variables of the registry item") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/cssVariables`

* [Registry Item File](./registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file.md "A file in the registry item") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/0`

* [Registry Item File](./registry-properties-registry-items-items-properties-registry-item-files-registry-item-file-oneof-registry-item-file-1.md "A file in the registry item") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files/items/oneOf/1`

* [Untitled object in Weme UI Registry JSON Schema Definitions](./registry-properties-registry-items-items.md) – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items`

* [Untitled object in Weme UI Registry JSON Schema Definitions](./registry-properties-registry-items-items-properties-registry-item-css-variables-additionalproperties-anyof-0.md) – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/cssVariables/additionalProperties/anyOf/0`

* [Untitled object in Weme UI Repository JSON Schema Definitions](./repository-properties-registries-items.md) – `https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries/items`

### Arrays

* [Config Repositories](./config-properties-config-repositories.md "The repositories used in the project") – `https://weme-ui.github.io/schema/v2/config.schema.json#/properties/repos`

* [Registry Item Dependencies](./registry-properties-registry-items-items-properties-registry-item-dependencies.md "The names of other items that this item depends on") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/dependencies`

* [Registry Item Development Dependencies](./registry-properties-registry-items-items-properties-registry-item-development-dependencies.md "The names of other items that this item depends on during development") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/devDependencies`

* [Registry Item Files](./registry-properties-registry-items-items-properties-registry-item-files.md "The files that belong to this item") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/files`

* [Registry Item Local Dependencies](./registry-properties-registry-items-items-properties-registry-item-local-dependencies.md "The names of other items in the same registry that this item depends on") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items/items/properties/localDependencies`

* [Registry Items](./registry-properties-registry-items.md "The items in this registry") – `https://weme-ui.github.io/schema/v2/registry.schema.json#/properties/items`

* [Untitled array in Weme UI Repository JSON Schema Definitions](./repository-properties-registries.md) – `https://weme-ui.github.io/schema/v2/repository.schema.json#/properties/registries`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `https://json-schema.org/draft-07/schema#`
