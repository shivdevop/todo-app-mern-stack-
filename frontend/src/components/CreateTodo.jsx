
import { useState  } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        const todo = { title, description };
    
        try {
          const response = await fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
          });
    
          if (response.ok) {
            console.log('Todo added successfully');
            // Optionally reset the form fields
            setTitle('');
            setDescription('');
          } else {
            console.error('Failed to add todo');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


    return <div>
         <input type="text" placeholder="title" onChange={function (e)
            {
                const value=e.target.value;
                 setTitle(value);
            }
         }></input><br/>
           <input type="text" placeholder="description" onChange={function (e){
            const value=e.target.value;
            setDescription(value);
           }}></input><br/>
           
           <button onClick={handleSubmit} >Add a todo</button>
    </div>
}