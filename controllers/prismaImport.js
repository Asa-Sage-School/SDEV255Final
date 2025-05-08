//Central repository for Prisma client so the app uses the same one all the time.
//Renamed this to make its purpose immediately clear and make sure xCtrl files are always controllers.
const { PrismaClient } = require('../prismaCLI/client');
const prisma = new PrismaClient();

module.exports = prisma;