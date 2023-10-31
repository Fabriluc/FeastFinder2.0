import express from "express";
import mysql from "mysql2";

const pool = mysql.createPool({
  host: "monorail.proxy.rlwy.net",
  user: "root",
  password: "5b5AHcaCH5A62hE2ABE23eHEh36dbgBE",
  database: "railway",
  port: "16272",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

function runQuery(query, callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      callback(err, null);
    } else {
      connection.query(query, (queryError, results) => {
        connection.release();
        callback(queryError, results);
      });
    }
  });
}

export default runQuery;
