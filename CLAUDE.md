# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains JSON Schema definitions for [Weme UI](https://github.com/weme-ui/weme-ui), a UI framework. The schemas define the configuration structure for Weme UI projects.

## Common Commands

```bash
# Install dependencies
pnpm install

# Build all schemas and documentation
pnpm build

# Build only v1 schemas and docs
pnpm build:v1

# Build only v2 schemas and docs
pnpm build:v2

# Clean generated files (v1/, v2/, docs/v1/, docs/v2/)
pnpm clean

# Update dependencies
pnpm taze
```

## Architecture

The project uses a source-to-generated pattern:

- **`src/v1/`** / **`src/v2/`** — Source JSON Schema files (edit these)
- **`v1/`** / **`v2/`** — Generated schema files (auto-generated from src/)
- **`docs/v1/`** / **`docs/v2/`** — Generated markdown documentation (auto-generated from src/)

The build process uses `@adobe/jsonschema2md` to convert JSON schemas into readable markdown documentation.

## Schema Versions

- **v1**: Legacy schema version with `project.schema.json`, `registry.schema.json`, `repository.schema.json`
- **v2**: Current schema version with `config.schema.json`, `registry.schema.json`, `repository.schema.json`

## Development Notes

- Node.js >= 22.14.0 and pnpm >= 10.13.0 are required
- Always edit schema source files in `src/v1/` or `src/v2/`, never the generated files in `v1/` or `v2/`
- Run `pnpm build` after modifying schemas to regenerate documentation
