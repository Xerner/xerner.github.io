[![Github Pages Deployment](https://github.com/Xerner/xerner.github.io/actions/workflows/github-pages-angular-deploy.yaml/badge.svg)](https://github.com/Xerner/xerner.github.io/actions/workflows/github-pages-angular-deploy.yaml)

# Portfolio

This repo relies on 
- [androids repo tool for pulling in external code dependencies through Git](https://source.android.com/docs/setup/reference/repo#init)
- Docker for running the [Dockerfile](./.devcontainer/docker/Dockerfile) and the [dev container](./.devcontainer/devcontainer.json)
- VS Code for running docker through the [dev container](./.devcontainer/devcontainer.json). The [dev container](./.devcontainer/devcontainer.json) is responsible for setting up a `.env` file that contains environment variables that provides the following to the container
  - Git user info
  - Git SSH public and private keys

## Prerequisites

1. Open the project in the docker container through VS Code or dockers CLI. 
> Note: If running the container purely through docker, Git credentials may have to be setup manually
2. First time setup of the `repo` tool and dependent repositories

```bash
repo init -u "https://github.com/Xerner/manifests" -b "development" -m "xerner.github.io.default.xml"
repo sync
```

## Building The App

1. Follow the [prerequisite steps](#prerequisites)
2. Build the app with `ng build`

## Serving The App

1. Follow the [prerequisite steps](#prerequisites)
2. Serve the app with `ng serve --configuration development`
