import NavbarJsx from "./components/navbar/navbar";
import "./styles.css";
import HeroJsx from "./components/hero/hero";
import CardJsx from "./components/card/card";

export default function App() {
  return (
    <>
      <NavbarJsx />;
      <HeroJsx />
      <CardJsx />
    </>
  );
}
