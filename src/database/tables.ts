export const tables: string[] = [
  `
  CREATE TABLE Admin(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    password TEXT NOT NULL,
    username TEXT NOT NULL
  );
  `,
]