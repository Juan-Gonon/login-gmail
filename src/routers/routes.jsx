import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { RequireAuth } from '../components/RequireAuth'

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
      </Routes>
    </BrowserRouter>
  )
}
