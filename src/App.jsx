import Form from './Form'
import Luna from './svgComps/Luna'
import './App.css'
import Item from './Item'
import TodoFilter from './TodoFilter'
import TodoList from './TodoList'
import { useState } from 'react'
import ToDoCounter from './ToDoCounter'
import Sol from './svgComps/Sol'
import ToggleTheme from './ToggleTheme'

const initialStateTodos = [
    { id: 1, title: 'Estudiar React', completed: true },
    { id: 2, title: 'Estudiar JS', completed: false },
    { id: 3, title: 'Descargar la app', completed: false },
    { id: 4, title: 'Hacer ejercicos de fuerza', completed: false }
]

function App() {
    const [todos, setTodos] = useState(initialStateTodos)
    const [filter, setFilter] = useState("all");

    const removeToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }

    const updateToDo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const changeFilter = (filter) => setFilter(filter);

    const filterToDo = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }

    const createToDo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false
        }
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className='h-60 bg-gray-800 dark:bg-black p-5'>
                    <ToggleTheme/>
                    <Form className='mt-14' createToDo={createToDo} />
            </header>
            <main className=' flex-grow bg-white  dark:bg-gray-900 duration-1000'>
                <TodoList todos={filterToDo()} removeToDo={removeToDo} updateToDo={updateToDo} />
                <div className='mt-8 flex flex-col gap-2 h-[50vh]  bg-gray-800 dark:bg-black'>
                    <ToDoCounter todos={todos} clearCompleted={clearCompleted} />
                    <TodoFilter changeFilter={changeFilter} />
                </div>

            </main>
        </div>
    )
}

export default App;


/*
Cuando se hace clic en el botón "Eliminar" de una tarea específica, se activa el evento onClick.

Este evento onClick llama a la función removeToDo pasándole el id de la tarea como argumento. Por ejemplo, si haces clic en el botón "Eliminar" de la segunda tarea de la lista, se llamará a removeToDo con el id correspondiente a esa tarea (en este caso, el id sería 2).

La función removeToDo toma el id como parámetro y utiliza este id para filtrar la lista de tareas (todos). La función filter recorre cada tarea en la lista y devuelve un nuevo array que contiene todas las tareas cuyo id no coincide con el id que se pasó como argumento a removeToDo.

Después de filtrar la lista de tareas, la función setTodos se utiliza para actualizar el estado todos con el nuevo array filtrado. Esto significa que se reemplaza la lista de tareas existente con la nueva lista que no incluye la tarea que se quería eliminar.
*/


//UpdateTodo Si hay una coincidencia de id, copiamos el objeto del todo ({...todo}) y modificamos su propiedad completed al valor opuesto (!todo.completed), es decir, si estaba completado lo marcamos como incompleto y viceversa.
