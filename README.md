# Prisma Crash

## Start the Project

```bash
pnpm init
```

## Add TypeScript ts-node and @types/node

```bash
pnpm i typescript ts-node @types/node -D
```

## Create tsconfig file

```bash
npx tsc --init
```

## Install and initialize Prisma

```bash
pnpm i prisma
pnpm dlx prisma init --datasource-provider sqlite
```
