import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // ... you will write your Prisma Client queries here
  // 初始化机构管理数据
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
    console.log('初始化机构管理数据-result', result);
  }

  // 初始化部门管理数据
  if ((await prisma.systemOrganizationDept.count()) <= 0) {
    const result = await prisma.systemOrganizationDept.createMany({
      data: [
        {
          parentId: 0,
          orgId: 2,
          name: '总经办',
          sort: 0,
          leader: '张三',
          phone: '18684868152',
          email: 'prisma@prisma.com',
        },
        {
          parentId: 0,
          orgId: 2,
          name: '财务部',
          sort: 1,
          leader: '李四',
          phone: '18684868153',
          email: '18684868153@prisma.com',
        },
        {
          parentId: 0,
          orgId: 2,
          name: '综合部',
          sort: 2,
          leader: '爱丽丝',
          phone: '18684868154',
          email: '18684868154@prisma.com',
        },
        {
          parentId: 0,
          orgId: 2,
          name: '技术部',
          sort: 3,
          leader: '刘备',
          phone: '18684868155',
          email: '18684868155@prisma.com',
        },
        {
          parentId: 0,
          orgId: 2,
          name: '研发部',
          sort: 4,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
        {
          parentId: 0,
          orgId: 2,
          name: '法务部',
          sort: 5,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
        {
          parentId: 0,
          orgId: 4,
          name: '郴州总经办',
          sort: 0,
          leader: '张三',
          phone: '18684868152',
          email: 'prisma@prisma.com',
        },
        {
          parentId: 0,
          orgId: 4,
          name: '郴州营销部',
          sort: 1,
          leader: '李四',
          phone: '18684868153',
          email: '18684868153@prisma.com',
        },
        {
          parentId: 0,
          orgId: 4,
          name: '郴州加装部',
          sort: 2,
          leader: '爱丽丝',
          phone: '18684868154',
          email: '18684868154@prisma.com',
        },
        {
          parentId: 0,
          orgId: 4,
          name: '郴州安装部',
          sort: 3,
          leader: '刘备',
          phone: '18684868155',
          email: '18684868155@prisma.com',
        },
        {
          parentId: 0,
          orgId: 4,
          name: '郴州工程部',
          sort: 4,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
        {
          parentId: 0,
          orgId: 4,
          name: '郴州维保部',
          sort: 5,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
        {
          parentId: 0,
          orgId: 3,
          name: '衡阳总经办',
          sort: 0,
          leader: '张三',
          phone: '18684868152',
          email: 'prisma@prisma.com',
        },
        {
          parentId: 0,
          orgId: 3,
          name: '衡阳营销部',
          sort: 1,
          leader: '李四',
          phone: '18684868153',
          email: '18684868153@prisma.com',
        },
        {
          parentId: 0,
          orgId: 3,
          name: '衡阳加装部',
          sort: 2,
          leader: '爱丽丝',
          phone: '18684868154',
          email: '18684868154@prisma.com',
        },
        {
          parentId: 0,
          orgId: 3,
          name: '衡阳安装部',
          sort: 3,
          leader: '刘备',
          phone: '18684868155',
          email: '18684868155@prisma.com',
        },
        {
          parentId: 0,
          orgId: 3,
          name: '衡阳工程部',
          sort: 4,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
        {
          parentId: 0,
          orgId: 3,
          name: '衡阳维保部',
          sort: 5,
          leader: '李云龙',
          phone: '18684868156',
          email: '18684868156@prisma.com',
        },
      ],
    });
    console.log('初始化部门管理数据-result', result);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
