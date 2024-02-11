const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { full_name : 'andy', password, email: 'andy@ggg.mail' },
  { full_name : 'bobby', password, email: 'bobby@ggg.mail' },
  { full_name : 'candy', password, email: 'candy@ggg.mail' },
]


const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
}

run()