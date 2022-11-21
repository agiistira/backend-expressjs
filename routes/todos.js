const express = require("express");
const router = express();

const imageFilter = require("../middleware/multer");

const { validationTodos, addTodos, getTodos } = require("../controller/todos");

router.post("/todos", imageFilter, [validationTodos, addTodos]);
router.get("/todos", getTodos);

module.exports = router;
