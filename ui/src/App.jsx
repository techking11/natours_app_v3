import { Outlet } from "react-router-dom";
import "./App.css"

import Header from "./components/Header/Header.components";
import Footer from "./components/Footer/Footer.components";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
