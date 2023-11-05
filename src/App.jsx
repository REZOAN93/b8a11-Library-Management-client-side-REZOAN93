import { Outlet } from "react-router-dom";
import "./App.css";
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
