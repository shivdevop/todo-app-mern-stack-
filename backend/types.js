//building zod schema 

const zod = require("zod");

// {
//     //for the put todo route what all input types can be there
//     title:string,
//     description:string
// }


// {
//     //for the mark specific todo as done route, we need the id of the particular todo to target
//     id:string 
// }

const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo=zod.object({
    id:zod.string()
})

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}