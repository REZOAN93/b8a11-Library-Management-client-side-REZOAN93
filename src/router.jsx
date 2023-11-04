import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import App from "./App";
import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Registeration/Register";
import Profile from "./Components/Authentication/Profile/Profile";
import Users from "./Components/Authentication/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users')
      },
    ],
  },
]);