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

## Install and initialize Prisma with sqlite

```bash
pnpm i prisma
pnpm prisma init --datasource-provider sqlite
```

## Write the data models

```prisma
model User {
  id       Int       @id @default(autoincrement())
  email    String    @unique
  name     String?
  articles Article[]
}

model Article {
  id       Int     @id @default(autoincrement())
  title    String
  body     String?
  User     User    @relation(fields: [authorId], references: [id])
  authorId Int
}
```

## Run the migrations

```bash
pnpm prisma migrate dev --name init
```

