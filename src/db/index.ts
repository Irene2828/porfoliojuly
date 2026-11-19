import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

type Database = ReturnType<typeof drizzle<typeof schema>>;

let dbInstance: Database | undefined;

function getDb(): Database {
  if (!dbInstance) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is required to use the database.');
    }

    dbInstance = drizzle(neon(databaseUrl), { schema });
  }

  return dbInstance;
}

// Keep the existing `db.select(...)` / `db.query...` API while deferring
// connection setup until an actual database operation is attempted.
export const db = new Proxy({} as Database, {
  get(_target, property) {
    return Reflect.get(getDb(), property);
  },
});
