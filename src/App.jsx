import styled from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import './App.css'

function App () {
  return (
    <AuthProvider>
      <Container>
        <h1>Gmail</h1>
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
