# Plateforme aides-agri

## Pre-requisites

You need those pretty standard tools on your system:
- [uv](https://docs.astral.sh/uv/) as the Python venv/dependencies manager
- [just](https://just.systems/) as the command runner
- Docker for a simple PostgreSQL

## Useful recipes

### Django commands with native virtualenv and `.env`

The following will run the given Django `COMMAND` after loading the correct Python version, the correct virtualenv and your `.env` file:

```shell
just manage COMMAND
```

Shorthands exist for:
- `just runserver`
- `just shell`
- `just makemigrations`
- `just migrate`
