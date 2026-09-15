import Database from 'better-sqlite3';
import path from 'path';

// Define the path to the SQLite database file
const dbPath = path.resolve(process.cwd(), 'local-database.sqlite');

// Initialize the database connection
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

// Initialize schema if not exists
db.exec(`
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

export default db;
