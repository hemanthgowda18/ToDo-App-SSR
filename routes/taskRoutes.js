const express = require("express");
const tasks = require("../data");
//Router Instance
let router = express.Router();

router.get("/", (req, res) => {
  console.log(tasks);
  // res.send("get tasks")
  res.status(200).json({
    status: "success",
    data: {
      tasks,
    },
  });
});

router.post("/", (req, res) => {
  // res.send("post tasks");
  // console.log(req.body);
  let task = req.body.task;
  tasks.push({ id: tasks.length + 1, task: task });
  res.status(200).json({
    status: "success",
    data: {
      tasks,
    },
  });
});
router.get("/:id",(req,res)=>{
  // console.log(req.params.id);
  const id=+req.params.id
  const taskIndex=tasks.findIndex(task=>task.id===id)
  if(taskIndex>-1){
    const task=tasks[taskIndex]
    res.status(200).json({
      status:'success',
      data:{
        task
      }
    })
  }else{
     res.status(200).json({
       status: "success",
       message:'There is no Task with This id'
     });

  }
})
router.patch("/:id",(req,res)=>{
  let id=+req.params.id
  let task=tasks.find(task=>task.id===id)
  task["task"]=req.body.task
  res.json(task)
})
router.delete("/:id", (req, res) => {
  let id = +req.params.id;
  let taskIndex=tasks.findIndex(task=>task.id===id)
  if(taskIndex>-1){
    tasks.splice(taskIndex,1)
    res.json({
      message:"Task Deleted Successfully"
    })
  }
});




module.exports = router;
