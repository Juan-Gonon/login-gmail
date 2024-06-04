import styled from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import { MyRoutes } from './routers/routes'
import './App.css'

function App () {
  return (
    <AuthProvider>
      <Container>
        <MyRoutes />
      </Container>
    </AuthProvider>
  )
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
`

export default App
