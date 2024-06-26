import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { RequireAuth } from '../components/RequireAuth'
import { Perfil } from '../pages/Perfil'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={
            <RequireAuth>
              <Home />
            </RequireAuth>
        }
        />
        <Route path='/login' element={<Login />} />
        <Route
          path='/perfil' element={
            <RequireAuth>
              <Perfil />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
