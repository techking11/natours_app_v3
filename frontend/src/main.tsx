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
import Tour from './pages/Tours/Tour.pages.tsx';
import Login from './pages/Login/Login.components.tsx';
import Signup from './pages/Signup/Signup.components.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="tours/64bd36868b4c62a9cb577d8b" element={<Tour />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="*" element="<h1>hello</h1>" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('content__wrapper') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
