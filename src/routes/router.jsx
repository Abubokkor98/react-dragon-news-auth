import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>
  },  
  {
    path: '/news',
    element: <h1>News Layout</h1>
  },  
  {
    path: '/auth',
    element: <h1>Login Layout</h1>
  },  
  {
    path: '*',
    element: <h1>Error</h1>
  }  
])