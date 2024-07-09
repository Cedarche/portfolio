import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./LandingComponents/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
