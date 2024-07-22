import Header from './header'
import { Subheader } from './subheader'
import Home from './home'
import './App.css'
import Mainfooter from './footer'
import Product from './productpaage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './login'
import Cart from './addcart'
import Category from './category/category'

function App() {
 
  const router = createBrowserRouter([
    {
      path:'',
      element:<Home/>
    },
    {
      path: "product/:id",
      element: <Product />,
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"login",
      element: <Login/>
    },
    {
      path:"/cart",
      element: <Cart/>
    },
    {
      path:"/category/:index",
      element:<Category/>
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
