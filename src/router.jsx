import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import App from "./App";
import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Registeration/Register";
import Profile from "./Components/Authentication/Profile/Profile";
import Users from "./Components/Authentication/Users";
import AddBooks from "./Components/AddBooks/AddBooks";
import AllBooks from "./Components/AllBooks/AllBooks";
import Borrowed from "./Components/Borrowed/Borrowed";
import BooksbyCategory from "./Components/CategoryBook/BooksbyCategory";
import BookDetails from "./Components/CategoryBook/BookDetails";

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
        path: "/category/:id",
        element: <BooksbyCategory />,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookdetails/${params.id}`),
      },
      {
        path: "/addbook",
        element: <AddBooks />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/borrowed",
        element: <Borrowed />,
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