import { Fragment } from "react/jsx-runtime";
import "./App.css"

import Header from "./components/Header/Header.components";
import Footer from "./components/Footer/Footer.components";
import { Outlet } from "react-router-dom";

export default function App() {

  const userArr = {
    id: 1,
    name: 'Jonas',
    photo: 'img/users/default.jpg'
  }

  return (
    <Fragment>
      <Header user={userArr} />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
