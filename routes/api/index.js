var express = require ("express");
const items = require("../../src/items");

var router = express.Router();

const tasks = require("../../src/tasks.js");

/*タスクを登録するルーティング*/
router.post("/tasks", async function(req,res, next) {
  console.log(req.body);
  const postTask = await tasks.postTasks(req.body);
  res.send(postTask);
});

//タスク一覧を取得するルーティング
router.get("/tasks", async function (req, res, next) {
    const getTasks = await tasks.getTasks();
    res.send(getTasks);
});

//タスクを一件取得するルーティング
router.get("/tasks/:id", async function (req, res, next) {
  const getTasksId = await tasks.getTasksId(req.params.id);
  res.send(getTasksId);
});

//タスクを一件更新するルーティング★
router.patch("/tasks/:id", async function (req, res, next) {
  const patchTasksId = await tasks.patchTasksId(req.params.id, req.body);
  res.send(patchTasksId);
});

//タスク一覧を削除するルーティング
router.delete("/tasks/:id", async function (req, res, next) {
  const deleteTasksId = await tasks.deleteTasksId(req.params.id);
  res.send(deleteTasksId);
});

//未処理ステータスの取得ルーティング ※
router.get("/tasks/status/:id", async function (req, res, next) {
  const getTasks_status = await tasks.getTasks_status(req.params.id);
  res.send(getTasks_status);
});

//作業中ステータスの取得ルーティング　※
router.get("/tasks/status/:id", async function (req, res, next) {
  const getTasks_status = await tasks.getTasks_status(req.params.id);
  res.send(getTasks_status);
});

//締切間近ステータスの取得ルーティング　※
router.get("/tasks/status/:id", async function (req, res, next) {
  const getTasks_status = await tasks.getTasks_status(req.params.id);
  res.send(getTasks_status);
});


module.exports = router;
