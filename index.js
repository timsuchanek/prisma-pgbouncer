const { PrismaClient } = require('@prisma/client')

async function main() {
  const client = new PrismaClient({
    forceTransactions: true,
  })
  for (let i = 0; i < 100; i++) {
    // const users = await client.user.create({
    //   data: {
    //     name: 'Name',
    //   },
    // })
    const users = await client.user.findMany()
    console.log(users)
  }
  client.disconnect()
}

main()
