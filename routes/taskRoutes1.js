const express = require("express");
let router = express.Router();
const {getTasks,getTask,postTask,updateTask,deleteTask}=require("../controllers/taskControllers")
// router.get("/",getTasks)
// router.post("/", postTask);
// router.get("/:id",getTask);
// router.patch("/:id",updateTask );
// router.delete("/:id",deleteTask );

router.route("/").get(getTasks).post(postTask)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

module.exports = router;
