// Contexto de la aplicación.
import { useContext } from "react"
import { Context } from "../../Context/ContextProvider"
// Component.
import ActionButton from "../Buttons/ActionButton"

import { Container } from "./style"

const MainContainer = ({children}) => {
  const {dispatch} = useContext(Context)

  function handleButton () {
    dispatch({type: "delete_all"})
  }

  return (
    <Container>
        {children}
        <ActionButton on_click={handleButton} label={"Borrar todas las tareas"} bg_color={"#cc3c3c"} radius={"4px"} padding={"8px"} margin_y={"20px"} width={"80%"}/>
    </Container>
  )
}

export default MainContainer
