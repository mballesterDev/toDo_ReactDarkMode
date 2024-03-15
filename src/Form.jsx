import { useState } from "react";

const Form = ({ className, createToDo }) => {
    const [title, setTitle] = useState('');

    const handleSubmitAddToDo = (e) => {
        e.preventDefault();
        // Agrega aquí la lógica para manejar la presentación del formulario
        console.log(title);
        // Reinicia el texto del formulario a una cadena vacía ya que value= title
        setTitle('');
        createToDo(title)
    };

    //PRIMERO SE EJECUTA EL ONCHANGE Y LUEGO SE EJECUTA EL ONSUBMIT
    //POR ESO SE GUARDA EL TITLE Y LUEGO LO PODEMOS REINICIAR 

    return (
        <form onSubmit={handleSubmitAddToDo} className={`w-full bg-white flex gap-4 items-center p-2 rounded-md text-sm ${className} md:w-[500px] md:mx-auto dark:bg-gray-800 dark:text-white`}>
            <span className="w-5 h-5 rounded-full border-2 bg-white "></span>
            <input className="outline-none dark:bg-inherit  " type="text" placeholder="Añade una nueva tarea"
                value={title} onChange={(e) => setTitle(e.target.value)} />
        </form>
    );
};
        //Primero hacemos que el value sea = titulo, pero que al cambiar, al darle enter el valor siga siendo igual al tittle pero actualizado
        //el ochange recive el evento e que es obligatorio recivitlo para usarlo por eso es obligatoria la funcion  y pone que el titulo al actulizarse
        //sea igual a el value del target(el input)
export default Form;


