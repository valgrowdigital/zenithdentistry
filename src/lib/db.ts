import Database from 'better-sqlite3';
import path from 'path';

let dbInstance: import('better-sqlite3').Database | null = null;

function getDb() {
  if (!dbInstance) {
    const dbPath = path.resolve(process.cwd(), 'local-database.sqlite');
    dbInstance = new Database(dbPath);
    dbInstance.pragma('journal_mode = WAL');

    dbInstance.exec(`
      CREATE TABLE IF NOT EXISTS Settings (
        key TEXT PRIMARY KEY,
        value TEXT
      );

      CREATE TABLE IF NOT EXISTS Conversations (
        phoneNumber TEXT PRIMARY KEY,
        messages TEXT -- We will store JSON stringified array of messages here
      );

      CREATE TABLE IF NOT EXISTS Bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        phoneNumber TEXT,
        name TEXT,
        date TEXT,
        time TEXT,
        service TEXT,
        status TEXT DEFAULT 'CONFIRMED',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
  return dbInstance;
}

const db = new Proxy({} as import('better-sqlite3').Database, {
  get: (_, prop) => {
    const instance = getDb();
    const value = Reflect.get(instance, prop);
    return typeof value === 'function' ? value.bind(instance) : value;
  }
});

export default db;
