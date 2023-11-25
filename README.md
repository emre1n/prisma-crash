# Prisma Crash

[Prisma Crash Course](https://www.youtube.com/watch?v=CYH04BJzamo) by Brad Traversy

[Blog Post](https://www.traversymedia.com/blog/pr...)

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
  author     User    @relation(fields: [authorId], references: [id])
  authorId Int
}
```

## Run the migrations

```bash
pnpm prisma migrate dev --name init
```

## Create Prisma Client

Inside index.ts import, initialize Prisma Client and crate a main function

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Prisma Queries
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

## Write Queries

### Create User Query

```typescript
  // Create User
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });
```

Run the `index.ts` file

```bash
pnpm ts-node index.ts
```

### Get all users query

```typescript
  // Get all users
  const users = await prisma.user.findMany();
```

### Create an article and associate it with user

```typescript
  // Create an article and associate it with user
  const article = await prisma.article.create({
    data: {
      title: 'Alices First Article',
      body: 'This is Alices first article',
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
```

Terminal output

```bash
{
  id: 1,
  title: 'Alices First Article',
  body: 'This is Alices first article',
  authorId: 1
}
```

### Get all articles

```typescript
  // Get all articles
  const articles = await prisma.article.findMany();
```

### Create a user and article and associate them

```typescript
  Create a user and article and associate them
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      articles: {
        create: {
          title: 'Bobs First Article',
          body: 'This is Bobs first article',
        },
      },
    },
  });
```

### Get all users with articles

```typescript
  // Get all users with articles
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
```

### Create another article

```typescript
  Create another article
  const article = await prisma.article.create({
    data: {
      title: 'Sample Article',
      body: 'This is a sample article',
      author: {
        connect: {
          id: 2,
        },
      },
    },
  });
```

### Loop Bobs articles

```typescript
  // Loop Bobs articles
  users.forEach(user => {
    console.log(`User: ${user.name}, Email: ${user.email}`);
    console.log('Articles:');
    user.articles.forEach(article => {
      console.log(`- Title: ${article.title}, Body: ${article.body}`);
    });
    console.log('\n');
  });
```

### Update data

```typescript
  // Update data
  const user = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: 'Alice the Second',
    },
  });
```

### Remove data

```typescript
  // Remove data
  const article = await prisma.article.delete({
    where: {
      id: 2,
    },
  });
```
