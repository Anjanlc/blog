import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root", 
  password: Anjan73070938,
  database:"blog"
})
