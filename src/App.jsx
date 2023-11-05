import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
