import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // ... you will write your Prisma Client queries here
  // 初始化组织机构数据
  if ((await prisma.systemOrganizationOrg.count()) <= 0) {
    const result = await prisma.systemOrganizationOrg.createMany({
      data: [
        {
          parentId: 0,
          name: 'Maya集团',
          sort: 0,
          leader: '张三',
          phone: '18684868152',
          email: 'prisma@prisma.com',
        },
        {
          parentId: 1,
          name: '长沙分公司',
          sort: 1,
          leader: '李四',
          phone: '18684868153',
          email: '18684868153@prisma.com',
        },
        {
          parentId: 1,
          name: '衡阳分公司',
          sort: 2,
          leader: '爱丽丝',
          phone: '18684868154',
          email: '18684868154@prisma.com',
        },
        {
          parentId: 1,
          name: '郴州分公司',
          sort: 3,
          leader: '刘备',
          phone: '18684868155',
          email: '18684868155@prisma.com',
        },
        {
          parentId: 1,
          name: '湘潭分公司',
          sort: 4,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
      ],
    });
    console.log('初始化组织机构-result', result);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
