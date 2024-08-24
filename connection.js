import mysql from "mysql"

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "ebakery"
})

export default db