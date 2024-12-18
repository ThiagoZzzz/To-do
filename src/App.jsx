import { GlobalStyle } from "./Styles/GlobalStyles"

import MainContainer from "./Components/MainContainer/MainContainer"
import FormBar from "./Components/FormBar/FormBar"
import TaskCard from "./Components/TaskCard/TaskCard"
import ContextProvider from "./Context/ContextProvider"

function App() {

  return (
    <ContextProvider>
      <MainContainer>
        <h1>Tasks</h1>
        <FormBar/>
        <TaskCard/>
      </MainContainer>

      <GlobalStyle/>
    </ContextProvider>
  )
}

export default App
