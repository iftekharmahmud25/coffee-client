import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './Componants/AddCoffe.jsx';
import UpdateCoffee from './Componants/UpdateCoffee.jsx';
import SignIn from './Componants/SignIn.jsx';
import SignUp from './Componants/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Componants/Users.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader : ()=> fetch('http://localhost:5000/coffee')
  },
  {
     path : "addCoffee",
     element : <AddCoffe></AddCoffe>
  },
  {
     path : "updateCoffee/:id",
     element : <UpdateCoffee></UpdateCoffee>,
     loader : ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
     path : "/signup",
     element : <SignUp></SignUp>
  },
  {
     path : "/signin",
     element : <SignIn></SignIn>
  },
  {
     path : "/users",
     element: <Users></Users>,
     loader : ()=> fetch('http://localhost:5000/user')
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
