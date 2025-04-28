-- CreateTable
CREATE TABLE "users" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pword" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "creAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "courses" (
    "cid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "cred" INTEGER NOT NULL,
    "creAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ucRel" (
    "relid" TEXT NOT NULL PRIMARY KEY,
    "uid" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "rel" TEXT NOT NULL,
    CONSTRAINT "ucRel_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users" ("uid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ucRel_cid_fkey" FOREIGN KEY ("cid") REFERENCES "courses" ("cid") ON DELETE RESTRICT ON UPDATE CASCADE
);
