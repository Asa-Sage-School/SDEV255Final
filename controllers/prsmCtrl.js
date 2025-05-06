// Central repository for Prisma client so the app uses the same one all the time.
const { PrismaClient } = require('../prismaCLI/client');
const prisma = new PrismaClient();

module.exports = prisma;