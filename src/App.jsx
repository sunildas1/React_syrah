import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import MainLayout from './layout/MainLayout';
import Ourstory from './pages/ourstory/Ourstory';
import Product from './pages/product/Product';
import News from './pages/latest_news/News';
import Contact from './pages/contact/Contact';
import Error from './pages/error_page/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/ourstory' element={<Ourstory/>}/>
      <Route path='/our_product' element={<Product/>}/>
      <Route path='/latest_news' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
    <Route path='*' element={<Error/>}/>
    </>
  )
);

function App() {
  

  return (
    <RouterProvider
      router={router}
  />
  )
}

export default App
