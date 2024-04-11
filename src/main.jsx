import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './pages/Details.jsx'
import NewContact from './pages/NewContact.jsx'
import Edit from './pages/Edit.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  { path:'/', element: <App /> },
  { path:'/details/:id', element: <Details /> },
  { path:'/edit/:id', element: <Edit /> },
  { path:'/new', element: <NewContact /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container-fluid">
    <div className="row justify-content-center vh-100 p-5">
      <div className="col-6 bg-white rounded p-5 pt-3">
        <React.StrictMode>
              <RouterProvider router={routes}>
                <App />
              </RouterProvider>
        </React.StrictMode>
      </div>
    </div>
  </div>
)
