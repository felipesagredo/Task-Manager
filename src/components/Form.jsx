import { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.agregarTarea(name);
        setName("");
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
            Agregar Tarea
        </button>
    </form>
    );
    }

export default Form;
