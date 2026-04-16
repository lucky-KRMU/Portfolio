import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'


let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
