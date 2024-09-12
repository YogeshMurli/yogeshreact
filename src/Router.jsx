import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ListingDetailsCard from "./components/ListingDetailsCard";
// import Portfolio from "./basics/Portfolio";
import UserPage from "./components/UserPage";
import UserDetails from "./components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/portfolio",
  //   element: <Portfolio />,
  // },
  {
    path: "/listing/:listingId",
    element: <ListingDetailsCard />,
  },

  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/user/:userId",
    element: <UserDetails />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
