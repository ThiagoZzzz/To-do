// Contexto de la aplicación.
import { useContext } from "react"
import { Context } from "../../Context/ContextProvider"
// Componentes y style.
import ActionButton from "../Buttons/ActionButton"
import { TaskContainer, Column} from "./style"


const TaskCard = () => {
  // Destructuring del context.
  const {state, dispatch} = useContext(Context)

  return (
    <Column>
      {state.map (({id, title_task} = task) => (
        <>
          <TaskContainer key={id}>
            <p>{title_task}</p>
            <ActionButton label={"Borrar"} bg_color={"#cc3c3c"} radius={"4px"} padding={"8px"}
              on_click={() => dispatch( {type: "delete_task", id} )}
            />
          </TaskContainer>
          <hr />
        </>
          ))
        }
      </Column>
  )
}

export default TaskCard