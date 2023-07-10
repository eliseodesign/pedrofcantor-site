import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const rolesBase:string[] = ['super-admin', 'admin']

async function main() {
  // created base roles
  for (const role of rolesBase) {
    const resul = await prisma.role.upsert({
      where: { name: role },
      update: {},
      create: {
        name: role,
      },
    });
    console.log(resul)
  }
}


main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
