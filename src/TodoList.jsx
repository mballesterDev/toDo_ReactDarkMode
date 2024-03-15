import Item from "./Item"

const TodoList = ({ todos,removeToDo,updateToDo }) => {
  return(

    <div className='flex flex-col gap-2 mt-8'>
   
    {todos.map((todo) => (
      <Item key={todo.id} todo={todo} removeToDo={removeToDo} updateToDo={updateToDo} />
    ))}
 
  </div>
  )
}

export default TodoList;