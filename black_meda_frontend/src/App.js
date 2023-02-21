import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./Pages/Landingpage/Home"
import Twitter from "./Pages/LiveFeed"
import Macros from "./Pages/Macros";
import Void from "./Pages/Void/Void";

const routes = [{path:"/", element:<Home/>},{path:"/liveFeed", element:<Twitter/>},{path:"/macro", element:<Macros/>},{path:"/void", element:<Void/>},{path:"/vc"}]

const router = createBrowserRouter(routes)


function App() {
  return <RouterProvider router={router}/>
}
export default App;
