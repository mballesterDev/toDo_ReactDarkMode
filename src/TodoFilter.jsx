import { useState } from "react";

const TodoFilter = ({ changeFilter }) => {
    const [botonActivo, setActivado] = useState("all");

    return (
        <div className="bg-white border-2 border-black flex justify-center align-center gap-4 mx-4 rounded-md p-3 text-xl md:w-[500px] md:mx-auto dark:bg-gray-800 dark:text-white">
            <button className={`hover:text-blue-600 ${botonActivo === "all" ? "text-blue-600" : "text-black"}`} onClick={() => { changeFilter("all"); setActivado("all"); }}>All</button>
            <button className={`hover:text-blue-600 ${botonActivo === "active" ? 'text-blue-600' : 'text-black'}`} onClick={() => { changeFilter("active"); setActivado("active"); }}>Active</button>
            <button className={`hover:text-blue-600 ${botonActivo === "completed" ? 'text-blue-600' : 'text-black'}`} onClick={() => { changeFilter("completed"); setActivado("completed"); }}>Completed</button>
        </div>
    );
};

export default TodoFilter;