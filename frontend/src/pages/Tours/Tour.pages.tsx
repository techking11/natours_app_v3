import { Fragment } from "react/jsx-runtime";
import Hero from "../../components/Hero/Hero.components";
import useTitle from "../../components/UseTitle/UseTitle.components";
import Description from "../../components/Description/Description.components";

export default function Tour() {
  useTitle('The Park Camper | Natours');
  return (
    <Fragment>
      <Hero />
      <Description />
    </Fragment>
  )
}