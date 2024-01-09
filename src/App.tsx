import EstiloGlobal, { Container } from './styles'

import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Sidebar></Sidebar>
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </>
  )
}

export default App
