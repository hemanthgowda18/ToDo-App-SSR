const Task=require("../models/Task")
const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find()
        res.status(200).render("home",{tasks:tasks})
      } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}
const postTask=async (req, res) => {
  try {
    //creating New Instance of data and Saving into db
    // const newTask=new Task({
    //     task:req.body.task
    // })
    // newTask.save()
    //this method creates the intance by itslef and saves the data into db
      await Task.create({
        task:req.body.task
    });
    res.status(201).redirect("/app/v1/tasks");
  } catch (error) {
    res.status(201).json({
      status: "fail",
      message: error.message,
    });
  }
}
const getTask= async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    res.status(200).render('update',{task});
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}
const updateTask=async (req, res) => {
  try {
    // const task = await Task.findByIdAndUpdate(req.params.id,req.body);
    const {task}=req.body
    const updatedTask=await Task.findByIdAndUpdate(req.params.id,{task:task},{new:true})
    res.status(200).redirect("/app/v1/tasks");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/app/v1/tasks")
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports={
    postTask,getTasks,getTask,updateTask,deleteTask
}