import "./App.css";
import Root from "./components/Root";
import HomePage from "./components/Homepage";

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
    {/*<Route path="/search" element={<SearchPage/>}/>
    <Route path=":destination/:id" element={<Destination />} />
    <Route path="/login" element={<LogIn/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/error" element={<ErrorPage/>} /> */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
