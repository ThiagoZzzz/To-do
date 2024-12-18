// Contexto de la aplicación.
import { useRef, useContext, useState } from "react"
import { Context } from "../../Context/ContextProvider"
// Componentes y style.
import ActionButton from "../Buttons/ActionButton"
import { Column, Bar, Input, ErrorContainer} from "./style"
// Icon.
import { MdOutlineError } from "react-icons/md";

const FormBar = () => {
  // Destructuring del context.
  const {state, dispatch} = useContext(Context)
  // Refrencia al input.
  const input = useRef()

  // Mostrar errores.
  const [error, setError] = useState("")

  // Función para el form (+task).
  function handleSubmit (e) {
    e.preventDefault();
    setError("")

    if ( input.current.value.trim() != "" && valid_task()) {
      dispatch( {type: "add_task", title: input.current.value.trim()} )
    }

    input.current.value = ""
  }

  function valid_task (){
    const taskExist = state.some(task => task.title_task === input.current.value.trim())

    if (taskExist){
      setError("La tarea ya se encuentra en la lista.")
      return false
    }

    return true
  }

  return (
    <Column>
      <Bar onSubmit={handleSubmit}>
          <Input placeholder="¿Qué tarea desea agregar?" ref={input}/>
          <ActionButton label={"Agregar"} bg_color={"#398af5"} radius={"4px"}/>
      </Bar>
      {error && (
        <ErrorContainer>
          <MdOutlineError size={25} />
          {error}
        </ErrorContainer>
      )}
    </Column>
  )
}

export default FormBar
