const express = require('express')
const {createTodo} = require("./types")
const {updateTodo} = require("./types.js")
const {todo}=require("./db.js")
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json())

const port='3000'

app.post("/todo",async function(req, res){
  const createPayload=req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json(
        {
            msg:"you sent wrong input "
        }
    )
    return;
  }

  //if success then put it in the database !!!!!
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
  })
 res.json({
  msg:"todo created successfully"
 })


})

app.get('/todos', async (req, res) => {
     const todos = await todo.find({});
     res.json({
      todos
     })    
})
app.put("/completed",async function(req, res)
{
  const updatePayload=req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success){
    res.status(411).json(
        {
            msg:"you sent wrong input "
        }
    )
    return;
  }

  //now you can update the todo from database



  await todo.findByIdAndUpdate({
    _id:updatePayload.id
  },{
    completed:true
  })
   
  res.json({
    msg:"todo marked as done "
  })
    

})
  // await todo.update({
  //   _id:updatePayload.id
  // },{
  //   completed:true
  // })

  //todo.update is not a function and wont work 


app.listen(3000,()=>{{
    console.log('listening on port '+port)
}}) 