const express=require ("express")
// const taskRouter=require("./routes/taskRoutes")
const taskRouter=require("./routes/taskRoutes1")
const methodOverride=require ("method-override")
//app instance
let app=express()
//register template Engine
app.set("view engine","ejs");
// app.use(cors())
//In Built MiddleWare to Process Incoming Data
// app.use(express.json())
//inbuilt middleware to serve static files from public folder
app.use(express.static("public"))
//To parse Incoming Payload
app.use(express.urlencoded({extended:true}))
//to overcome get and post to update and delete.(_method is querystring key)
app.use(methodOverride('_method'))

app.use("/app/v1/tasks",taskRouter)

module.exports=app;