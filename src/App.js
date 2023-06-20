import NavbarJsx from "./components/navbar/navbar";
import "./styles.css";
import HeroJsx from "./components/hero/hero";
import CardJsx from "./components/card/card";
import Filter from "./components/Filter/filter";

export default function App() {
  return (
    <>
      <NavbarJsx />;
      <HeroJsx />
      <CardJsx />
      <hr />
      <Filter />
    </>
  );
}
