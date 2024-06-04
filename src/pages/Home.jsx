import styled from 'styled-components'
import { useAuth } from '../hook/useAuth'

export const Home = () => {
  const { user, logOut } = useAuth()

  console.log(user)

  const cerrarScion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h1>Bienvenido {user.displayName}</h1>
      <button onClick={cerrarScion}>Log out</button>
    </Container>
  )
}

const Container = styled.section`
  
`
