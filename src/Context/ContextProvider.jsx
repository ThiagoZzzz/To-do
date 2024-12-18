import { createContext, useReducer } from "react"

// Contexto de la aplicación.
export const Context = createContext()

// Valor inicial del estado.
const INITIAL_STATE = [];

// TODO -> La lógica de agregar una tarea a la lista, verificando que no este repetida y mostrando un mensaje de error si la tarea ya existe. Este error debe mostrarse como un texto en rojo debajo del input.
// Función reducer.
function task_actions (state, action){
  switch (action.type) {
    case "add_task":
      // toma una copia de las tareas ya guardadas en el array y añade la nueva tarea.
      return [...state, {id: state.length, title_task: action.title}];

    case "delete_task":
      // filtra y quita la tarea que coincida con el id pasado en el dispatch.
      return state.filter((task) => task.id != action.id)

    case "delete_all":
      return []

    default:
      return state
  }
}

const ContextProvider = ({children}) => {
  // hook.
  const [state, dispatch] = useReducer(task_actions, INITIAL_STATE);

  // Provee el estado y el dispatch para hacer uso del reducer en otros componentes.
  return (
    <Context.Provider value={ {state, dispatch} }>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
