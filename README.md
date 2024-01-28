## Development

### Guidelines

Avoid using `'use server'` for now.

### Git

New feature flow (branches): `feature -> dev -> staging -> main`

#### Branches

- `main`: Production branch
- `staging`: Staging branch
- `dev`: Development branch
- `feature`: Feature branch

Note that `feature` is not the actual name of the branch but rather just a placeholder. Branch should be named after the name of the actual feature.

### Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) backed by [commitlint](https://commitlint.js.org/#/) for commit messages.