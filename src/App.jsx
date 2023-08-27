import React, { useEffect, useState, useContext } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Intro from "./components/Wiki/Intro";
import Article from "./components/Wiki/Article";
import Console from "./pages/Console";
import SignUp from "./pages/Signup";
import Error404 from "./pages/Error404";
import SearchContext from "./store/search-context";
import { Search } from "./components/Search/Search";
import { useGetData } from "./hooks/use-db";

const DefaultPage = () => {
  const { isShown } = useContext(SearchContext);

  return (
    <>
      {isShown && <Search />}
      <Outlet />
    </>
  );
};

const App = () => {
  const { data, isSuccess } = useGetData();
  const [addRoutes, setAddRoutes] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setAddRoutes(isSuccess);
  }, [isSuccess]);

  useEffect(() => {
    setArticles(data);
  }, [data]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DefaultPage />}>
        <Route index element={<Home />} />
        <Route path="wiki" element={<Wiki />}>
          <Route index element={<Intro />} />
          {(addRoutes && articles) &&
            articles.map((item, key) => (
              <Route
                key={key}
                path={item.address}
                element={<Article item={item} />}
              />
            ))}
        </Route>
        <Route path="console" element={<Console />} />
        <Route path="rejestracja" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
