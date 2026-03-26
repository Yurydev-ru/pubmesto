# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---
## Work in Git - Trunk-based Development - modern minimalism.

### 1. Main branches:
- `main` -- **stable, deployment only**;
- `develop` -- **current development**;
- `feature/*` -- **new features**;

#### _Exemple_:
```bash
git checkout -b feature/cart-button
# We're working on a feature
git commit -m "Add cart button"
git checkout main
git merge feature/cart-button
```
---

### 2. Working on the task

- Create a branch from develop:
`git checkout -b feature/name-features`

---

### 3. Rules commit
- Commit by Conventional Commits.
#### _Exemple_:
```bash
feat(cart): add cart button
```
- Make a Pull Request in develop.

---
