import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./Landing/Landing";
import Experience from "./Experience/Experience";
import Snappark from "./ProjectPages/Snappark/Snappark";
import Ream from "./ProjectPages/Ream/Ream";
import Crosscopy from "./ProjectPages/Crosscopy/Crosscopy";
import Assetrix from "./ProjectPages/Assetrix/Assetrix";
import Stellarmetrics from "./ProjectPages/Stellarmetrics/Stellarmetrics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  { path: "/projects/snappark", element: <Snappark /> },
  { path: "/projects/ream", element: <Ream /> },
  { path: "/projects/crosscopy", element: <Crosscopy /> },
  { path: "/projects/assetrix", element: <Assetrix /> },
  { path: "/projects/stellarmetrics", element: <Stellarmetrics /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
