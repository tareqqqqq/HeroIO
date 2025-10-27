import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import WishList from "../Pages/WishList/WishList";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayouts></MainLayouts>,
     errorElement: <ErrorPages />,
    
   
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/products',
        Component: Products
      },
      {
        path:'/installation',
        Component: WishList
      },
      {
                path: '/productDetails/:id',
                
                Component:ProductDetails
            }
    ]
  },
  
]);

export default router