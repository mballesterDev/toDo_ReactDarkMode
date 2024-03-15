const handelEliminate = () => {
     removeToDo(todo.id)
}


const ToDoCounter = ( {todos,clearCompleted}) => {
    return(
        <div className=" bg-white border-2 border-black flex justify-between align-center gap-4 mx-4 rounded-md  p-3 dark:bg-gray-800 text-white mt-7  md:w-[500px] md:mx-auto ">
        <p className=" text-gray-400 dark:text-white">{todos.length} items left</p>
        <button className="text-gray-400 bg-none border-0 hover:text-black dark:text-white" onClick={clearCompleted}>Clear Completed</button>
        </div>

    )
}

export default ToDoCounter;
