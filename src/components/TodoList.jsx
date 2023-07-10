import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";

import { TodoItem } from "./Todoitem";

import {v4 as uuid} from "uuid";

export function Todolist(){

    //Inicializar las variables que estaba viendo reack
    //Por si sufren cambios
    //todos = NOMBRE DE LA CONSTANTE
    //setTodos = metodo que se va a utilizar para capturar modificaciones
    //useState = Usara un sate para capturar los estados
    //VIGILAREMOS EL ESTADO DEL ARREGLO
    

    const [todos, setTodos] = useState([
        {id:1, tarea:"Tarea 1"} , {id:"2", tarea: "Tarea 2 "},
        {id:3, tarea:"Tarea 3"} , {id:"4", tarea: "Tarea 4 "}



    ]);

    

    const tareaRef = useRef();



    const agregarTarea = () =>{
        //alert("Agregando tarea....")

        const tarea = tareaRef.current.value;
        //alert(tarea);         
        const id = uuid();
        //alert(id);

        setTodos ((prevTodos) =>{
                const nuevaTarea = {
                    id:uuid(),
                    tarea: tarea
                }

                //3 PUNTITOS : TOMO EL ARREGLO NUEVO Y LO DESCOMPONGO
                //Y CON EL RETURN TOMO EL ARREGLO ANTIGUO Y LE SUMO LA TEREA NUEVA
                //RESULTANDO UN ARREGLO
                tareaRef.current.value = "";
                return [...prevTodos, nuevaTarea]
        })



    }












    return (
                <Fragment>      
                         

                         <h1>Listado de Tareas</h1> 

                    <div className="input-group nt-4 mb-4">
                        <input ref={tareaRef} placeholder="Ingrese una tarea " className="form-control" type="text"></input>
                        <button onClick={agregarTarea} className="btn btn-success ns-2"></button>

                    </div>

                        
                       <ul className="list-group">
                        {todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id}></TodoItem>

                        ))}
                    
                        </ul>  



                </Fragment>


    );
}