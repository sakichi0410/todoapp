//新規登録処理

const { application } = require("express");
const mysql = require("mysql2/promise");
const config = require("../config.js");

/**
*タスクを新規登録する　API
*
*@returns レスポンス　JSON
*/
postTasks = async function (body) {
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        // ここにSQLを記述する
        const sql = 
        "INSERT INTO todoapp.t_task ( task_name, deadline, category_id, task_status) VALUES (?,?,?,?);";
        let d = [body.taskName,body.deadline,body.category,body.status];
        const [rows,fields] = await connection.query(sql, d);

        // console.log(rows);
        return rows;
    }catch(err){
        console.log(err);
    }finally {
        connection.end();
    }
};

//タスクを一覧取得するAPI

getTasks = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //ここにsqlを記述する↓
        const sql = "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, m_status.status_name, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id LEFT JOIN m_status ON t_task.task_status = m_status.task_status ORDER BY deadline;";
        const [rows, fields] = await connection.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

//タスクを一件取得するAPI

getTasksId = async function (id) {
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        //ここにsqlを記述する↓
        const sql = "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, m_status.status_name, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id LEFT JOIN m_status ON t_task.task_status = m_status.task_status  WHERE t_task.id = ?";
        let d = [id];
        const [rows, fields] = await connection.query(sql,d);
        return rows;
    }catch(err) {
        console.log(err);
    }finally {
        connection.end();
    }
};

//タスクを一件更新するAPI＝保存する処理

patchTasksId = async function (id,body) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);

        //ここにSQLを記述する
        const sql = 
        "UPDATE t_task SET task_name=?, deadline=?, category_id=?, task_status=?, updated_at=? WHERE id=?;";
        let d = [
            body.taskName,
            body.deadline,
            body.category,
            body.status,
            new Date(),
            id,
        ];

        const [rows, fields] = await connection.query(sql, d);
         
        return rows;
    }catch(err) {
        console.log(err);
    }finally {
        connection.end();
    }
};

//タスクを一件削除するAPI

deleteTasksId = async function (id) {
    let connection = null;
    console.log(id);
    try{
        connection = await mysql.createConnection(config.dbSetting);
        //ここにSQLの記述
        const sql = "DELETE from t_task WHERE id = ?;";
        let d = [id];
        const [rows, fields] = await connection.query(sql, d);

        //consol.log(rows);
        return rows;
    }catch(err) {
        console.log(err);
    }finally {
        connection.end();
    }
};

//個々のステータス取得API ※
getTasks_status = async function (id) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //ここにsqlを記述する↓
        const sql = "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, m_status.status_name, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id LEFT JOIN m_status ON t_task.task_status = m_status.task_status WHERE  t_task.task_status = ?  order by deadline;";
        const [rows, fields] = await connection.query(sql,id);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

exports.getTasks_status = getTasks_status;


exports.deleteTasksId = deleteTasksId;
exports.patchTasksId = patchTasksId;
exports.getTasksId = getTasksId;
exports.getTasks = getTasks;
exports.postTasks = postTasks;