import * as SQLite from 'expo-sqlite';

// Open or create the database asynchronously
const db = await SQLite.openDatabaseAsync('my_database.db');

// Create table and insert initial data using execAsync (bulk queries)
export const createSettingsTable = async () => {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, first_time BOOLEAN);
        `);
        console.log('Table successfully created!');
    } catch (err) {
        console.error('Error creating table:', err);
    }
}

// Insert first-time value using runAsync (for single write operation)
export const setFirstTime = async () => {
    try {
        const result = await db.runAsync('INSERT INTO settings (first_time) VALUES (?);', true);
        console.log('Data inserted successfully!', result);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

// Get first-time value using getAllAsync (returns all rows as an array)
export const getFirstTime = async () => {
    try {
        const rows = await db.getAllAsync('SELECT * FROM settings;');
        return rows.length > 0 ? rows[0].first_time : null; // Returning first row's 'first_time' value
    } catch (error) {
        console.error('Error querying data:', error);
        return null;
    }
}

// Example function to fetch all rows (could be used in other contexts)
export const getAllSettings = async () => {
    try {
        const rows = await db.getAllAsync('SELECT * FROM settings;');
        console.log('All settings:', rows);
        return rows;
    } catch (error) {
        console.error('Error fetching all settings:', error);
        return [];
    }
}
