const mysql = require('mysql2/promise');
// Veritabanı bağlantı bilgileri
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'inlamningsuppgift1'
});
async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM Users');
    return rows;
}
async function getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM Users WHERE id = ?', [id]);
    return rows[0];
}
async function createUser(name, nickname, age, bio) {
    const [result] = await pool.query('INSERT INTO Users (name, nickname, age, bio) VALUES (?, ?, ?, ?)', [name, nickname, age, bio]);
    return result.insertId;
}
async function updateUser(id, name, nickname, age, bio) {
    await pool.query('UPDATE Users SET name = ?, nickname = ?, age = ?, bio = ? WHERE id = ?', [name, nickname, age, bio, id]);
}
async function deleteUser(id) {
    await pool.query('DELETE FROM Users WHERE id = ?', [id]);
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};