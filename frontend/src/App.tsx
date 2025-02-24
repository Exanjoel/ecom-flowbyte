import Header from './header'
import { Subheader } from './subheader'
import Home from './home'
import './App.css'
import Mainfooter from './footer'
import Product from './productpage/productpaage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './login'
import Cart from './addcart'
import Category from './category/category'
import Productlist from './products'

function App() {
 
  const router = createBrowserRouter([
    {
      path:'',
      element:<Home/>
    },
    {
      path: "product/:productId",
      element: <Product />,
    },
    {
      path: "product/category/:categoryId",
      element:<Productlist/>
    },
   
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/cart",
      element: <Cart/>
    },
    {
      path:"/category/:categoryId",
      element:<Category/>
    },
    {
      path:"/products",
      element:<Productlist/>
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
