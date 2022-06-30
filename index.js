const mysql = require('mysql2/promise');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
  });
}

//cancel connection
function cancelConnection(connection) {
    connection.cancel();
}

//close connection
function closeConnection(connection) {
    connection.close();
}

//query
function query(connection, query) {
    return connection.query(query);
}

//create table
function createTable(connection, tableName, columns) {
    return connection.query(`CREATE TABLE ${tableName} (${columns})`);
}

//delete table
function deleteTable(connection, tableName) {
    return connection.query(`DROP TABLE ${tableName}`);
}

//insert data
function insertData(connection, tableName, data) {
    return connection.query(`INSERT INTO ${tableName} SET ?`, data);
}

//update data
function updateData(connection, tableName, data, where) {
    return connection.query(`UPDATE ${tableName} SET ? WHERE ?`, [data, where]);
}

//delete data
function deleteData(connection, tableName, where) {
    return connection.query(`DELETE FROM ${tableName} WHERE ?`, where);
}

//select data
function selectData(connection, tableName, where) {
    return connection.query(`SELECT * FROM ${tableName} WHERE ?`, where);
}


//export
const easysql2 = {
    createConnection,
    cancelConnection,
    closeConnection,
    query,
    createTable,
    deleteTable,
    insertData,
    updateData,
    deleteData,
    selectData,
}

module.exports.createConnection = createConnection;
module.exports.cancelConnection = cancelConnection;
module.exports.closeConnection = closeConnection;
module.exports.query = query;
module.exports.createTable = createTable;
module.exports.deleteTable = deleteTable;
module.exports.insertData = insertData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
module.exports.selectData = selectData;
module.exports.easysql2 = easysql2;