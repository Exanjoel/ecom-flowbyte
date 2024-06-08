import Header from './header'
import { Subheader } from './subheader'
import Home from './home'
import './App.css'
import Mainfooter from './footer'
import Product from './productpaage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './login'

function App() {
 
  const router = createBrowserRouter([
    {
      path: "product",
      element: <Product />,
    },
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"login",
      element: <Login/>
    }
  ]);


  return (
    <>
    <div className='px-3'>
       <Header/>
    </div>
    
     <div className='hidden lg:block'>
      <Subheader/>
     </div>
     <RouterProvider router={router} />
  
     



     <Mainfooter/>
 
    </>
  )
}

export default App
