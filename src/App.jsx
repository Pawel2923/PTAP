import { useEffect, useState, useContext } from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Outlet,
	useLocation,
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Intro from "./components/Wiki/Intro";
import Article from "./components/Wiki/Article";
import Console from "./pages/Console";
import Error404 from "./pages/Error404";
import Error403 from "./pages/Error403";
import SearchContext from "./store/search-context";
import { Search } from "./components/Search/Search";
import { useGetData } from "./hooks/use-db";
import useAuth from "./hooks/use-auth";
import PageContext from "./store/page-context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";

const DefaultPage = () => {
	const location = useLocation();
	const { currentPage, setCurrentPage } = useContext(PageContext);
	const { isShown } = useContext(SearchContext);

	useEffect(() => {
		if (currentPage !== location.pathname && !isShown) {
			setCurrentPage(location.pathname);
		}
	}, [location, currentPage, isShown, setCurrentPage]);

	return (
		<>
			{currentPage !== "/console" && <Nav />}
			{isShown && <Search />}
			<Outlet />
		</>
	);
};

const App = () => {
	const { uid } = useAuth();
	const { data, isSuccess } = useGetData();
	const [addRoutes, setAddRoutes] = useState(false);
	const [articles, setArticles] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(uid ? true : false);

	useEffect(() => {
		setAddRoutes(isSuccess);
	}, [isSuccess]);

	useEffect(() => {
		setArticles(data);
	}, [data]);

	useEffect(() => {
		if (!uid) {
			setIsLoggedIn(false);
			return;
		}
		setIsLoggedIn(true);
	}, [uid]);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<DefaultPage />}>
				<Route index element={<Home />} />
				<Route path="wiki" element={<Wiki />}>
					<Route index element={<Intro />} />
					{addRoutes &&
						articles &&
						articles.map((item, key) => (
							<Route
								key={key}
								path={item.address}
								element={<Article item={item} />}
							/>
						))}
				</Route>
				<Route path="console" element={isLoggedIn ? <Console /> : <Error403 />} />
				<Route path="rejestracja" element={<Signup />} />
				<Route path="logowanie" element={<Login />} />
				<Route path="wylogowanie" element={<Logout />} />
				<Route path="*" element={<Error404 />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
