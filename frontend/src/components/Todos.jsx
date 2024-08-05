export function Todos({todos})
{    

    const markAsDone = async (id) => {
        
          const response = await fetch('http://localhost:3000/completed', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
        }

    return <div>
     
     {
        todos.map(function(todo) {
            return <div>
                 <h1>{todo.title}</h1>
                 <h2>{todo.description}</h2>
                 {/* <button>{todo.completed==true?"Done":"mark as done"}</button> */}
                 <button onClick={() => !todo.completed && markAsDone(todo._id)}>
            {todo.completed ? 'Done' : 'Mark as Done'}
          </button>
                </div>
        })
     }

    </div>
}