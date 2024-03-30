import "./App.css";
import Root from "./Root";
import HomePage from "../pages/Homepage";
import { Destinations } from "../pages/Destinations";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route path="/" element={<HomePage />} />
       <Route path=":id" element={<Destinations />} />

    {/*<Route path="/search" element={<SearchPage/>}/>
    
    <Route path="/login" element={<LogIn/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/error" element={<ErrorPage/>} /> */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
