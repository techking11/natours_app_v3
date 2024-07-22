import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import Home from './pages/Home/Home.pages.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about-us" element="<h1>hello</h1>" />
      <Route path="*" element="<h1>hello</h1>" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('content__wrapper')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
