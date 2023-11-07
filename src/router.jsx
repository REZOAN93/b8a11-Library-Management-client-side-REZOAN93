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
import PrivateRoute from "./Routes/PrivateRoute";
import ReadBookPage from "./Components/ReadBookPage/ReadBookPage";
import UpdateBook from "./Components/UpdateBook/UpdateBook";

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
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookdetails/${params.id}`),
      },
      {
        path: "/addbook",
        element: <PrivateRoute><AddBooks /></PrivateRoute>,
      },
      {
        path: "/allbooks",
        element: <PrivateRoute> <AllBooks /></PrivateRoute>,
      },
      {
        path: "/userBorrowedBooks",
        element: <PrivateRoute><Borrowed /></PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/userBorrowedBooks/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/readBook/:id",
        element: <PrivateRoute><ReadBookPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookdetails/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/UpdateBook/:id",
        element: <PrivateRoute><UpdateBook /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookdetails/${params.id}`),
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "/users",
        element: <PrivateRoute><Users /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
    ],
  },
]);