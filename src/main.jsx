import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './css/index.css'
import MonsterDetail from './pages/MonsterDetail'

const router = createBrowserRouter([
  {
    path:'/monster/:id',
    element: <MonsterDetail/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
    <aside>
        <h2>menu temporario</h2>
    </aside>
    <RouterProvider router={router} />
    </main>
  </StrictMode>,
)
