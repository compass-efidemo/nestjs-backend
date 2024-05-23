## Description

Template project for starting new backend service with default Github actions workflows.

## Setup

Some of the workflows are set to run on `workflow_dispatch` so they don't run and fail as they might require to set correct URLs or secrets. Github Actions are also disabled as default need to be enabled.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
