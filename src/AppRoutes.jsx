import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Wiki from "./components/Wiki/Wiki";
import Intro from "./components/Wiki/Intro";
import Console from "./components/Console/Console";
import SignUp from "./components/SignUp/SignUp";
import Error404 from "./components/Error/Error404";
import { StringToJSX } from "./StringToJSX";
import { useGetData } from "./hooks/use-db";
import { useEffect, useState } from "react";

const AppRoutes = () => {
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
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="wiki" element={<Wiki />}>
          <Route index element={<Intro />} />
          {addRoutes &&
            articles.map((item, key) => (
              <Route
                key={key}
                path={item.address}
                element={
                  item.article ? (
                    <>
                      <header>
                        <h2>{item.article.header}</h2>
                      </header>
                      <div className="content">
                        <StringToJSX domString={item.article.content} />
                      </div>
                    </>
                  ) : (
                    item.element
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

export default AppRoutes;
