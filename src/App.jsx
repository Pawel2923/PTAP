import React, { useEffect, useState, useContext } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Wiki from "./components/Wiki/Wiki";
import Intro from "./components/Wiki/Intro";
import Console from "./components/Console/Console";
import SignUp from "./components/SignUp/SignUp";
import Error404 from "./components/Error/Error404";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SearchContext from "./store/search-context";
import { Search } from "./components/Search/Search";
import { StringToJSX } from "./StringToJSX";
import { useGetData } from "./hooks/use-db";

const DefaultPage = () => {
  const { isShown } = useContext(SearchContext);

  return (<>
    {isShown && <Search />}
    <Nav />
    <Outlet />
    <Footer />
  </>);
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
                element={
                  (item.content && item.name) && (
                    <>
                      <header>
                        <h2>{item.name}</h2>
                      </header>
                      <div className="content">
                        <StringToJSX domString={item.content} />
                      </div>
                    </>
                  )
                }
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
