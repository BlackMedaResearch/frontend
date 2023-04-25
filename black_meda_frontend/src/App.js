import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Landingpage/Home";
import News from "./Pages/FinanceNews/LiveFeed";
import Macros from "./Pages/Macros/Macros";
import Void from "./Pages/Void/Void";
import Root from "./Pages/Root";
import { Children } from "react";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/finance_news", element: <News /> },
  { path: "/macro", element: <Macros /> },
  { path: "/void", element: <Void /> },
  { path: "/vc" },
];

const router = createBrowserRouter(routes);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/void",
        element: <Void />,
      },
    ],
  },
  {
    path: "",
    element: <Root></Root>,
    id: "finished_features",
    children: [
      {
        path: "/macro",
        element: <Macros />,
        //loader, action
      },
      {
        path: "/finance_news",
        element: <News />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router2} />;
}
export default App;
