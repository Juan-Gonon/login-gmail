import { useAuth } from '../hook/useAuth'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const RequireAuth = ({ children }) => {
  const { user } = useAuth()
  return (
    user ? children : <Navigate to='/login' />
  )
}
