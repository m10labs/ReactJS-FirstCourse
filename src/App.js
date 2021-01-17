import logo from "./logo.svg";
import "./App.css";
import SubText from "./SubText";
import Navbar from "./Navbar.js";
import Content from "./Content.js";

function App(props) {
  return (
    <>
      <Navbar tabs={["home", "about us", "contact us"]} />
      <Content />
    </>
  );
}

export default App;
