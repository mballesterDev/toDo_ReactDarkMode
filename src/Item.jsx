import React, { useState } from "react";
import Cruz from "./svgComps/Cruz";
import Tick from "./svgComps/Tick";

const completedTask = "inline-block h-5 w-5 rounded-full border-black border bg-gradient-to-r from-sky-400 to-violet-400 grid place-items-center";
const unCompletedTask = "inline-block h-5 w-5 rounded-full border-black border";

const Item = ({ todo, removeToDo, updateToDo }) => {
    const handleClick = () => {
        updateToDo(todo.id);
    };

    return (
        <article className="border border-black bg-white mx-4 p-2 rounded-md flex items-center gap-2 shadow-md  md:w-[500px] md:mx-auto dark:bg-gray-800 dark:text-white">
            <button onClick={handleClick} className={todo.completed ? completedTask : unCompletedTask}>
                {todo.completed && <Tick />}
            </button>
            <p className="grow">{todo.title}</p>
            <button className="flex-none" onClick={() => removeToDo(todo.id)}>
                <Cruz />
            </button>
        </article>
    );
};

export default Item;
