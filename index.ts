import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Prisma Queries

  // Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: 'Alice',
  //       email: 'alice@prisma.io',
  //     },
  //   });

  // Get all users
  // const users = await prisma.user.findMany();
  // console.log(users);

  // Create an article and associate it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Alices First Article',
  //     body: 'This is Alices first article',
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  // console.log(article);

  // Get all articles
  const articles = await prisma.article.findMany();
  console.log(articles);

  // Create a user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     articles: {
  //       create: {
  //         title: 'Bobs First Article',
  //         body: 'This is Bobs first article',
  //       },
  //     },
  //   },
  // });

  // console.log(user);

  // Get all users with articles
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // });
  // console.log(users);

  // Create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Sample Article',
  //     body: 'This is a sample article',
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // console.log(article);

  // Loop Bobs articles
  // users.forEach(user => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`);
  //   console.log('Articles:');
  //   user.articles.forEach(article => {
  //     console.log(`- Title: ${article.title}, Body: ${article.body}`);
  //   });
  //   console.log('\n');
  // });

  // Update data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: 'Alice the Second',
  //   },
  // });

  // console.log(user);

  // Remove data
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2,
  //   },
  // });

  // console.log(article);
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
