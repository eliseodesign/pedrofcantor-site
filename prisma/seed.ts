import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const rolesBase:string[] = ['super-admin', 'admin']

async function main() {
  // created base roles
  
  const roleSuperAdmin = await prisma.role.upsert({
    where: { name: rolesBase[0] },
    update: {},
    create: {
      name: rolesBase[0],
    },
  })
  const superAdmin = await prisma.user.upsert({
    where: {username: 'eliseo'},
    update: {},
    create:{
      fullName: 'Eliseo Francisco Arévalo',
      username: 'eliseo',
      password: '2480931',
      roleId: roleSuperAdmin.id
    }
  })
}


main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
