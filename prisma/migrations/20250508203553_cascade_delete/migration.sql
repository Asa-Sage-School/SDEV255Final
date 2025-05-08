-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ucRel" (
    "relid" TEXT NOT NULL PRIMARY KEY,
    "uid" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "rel" TEXT NOT NULL,
    CONSTRAINT "ucRel_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users" ("uid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ucRel_cid_fkey" FOREIGN KEY ("cid") REFERENCES "courses" ("cid") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ucRel" ("cid", "rel", "relid", "uid") SELECT "cid", "rel", "relid", "uid" FROM "ucRel";
DROP TABLE "ucRel";
ALTER TABLE "new_ucRel" RENAME TO "ucRel";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
