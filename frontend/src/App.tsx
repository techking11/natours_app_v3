import { Fragment } from "react/jsx-runtime";
import "./App.css"

import Header from "./components/Header/Header.components";
import Footer from "./components/Footer/Footer.components";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
