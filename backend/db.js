const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shivamagarwalla05:XvBaPNnd0K1wQfQm@cluster0.po6s0as.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos', todoSchema);

module.exports={
    todo
}
