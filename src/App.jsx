import { useEffect, useState, useContext, useMemo } from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Outlet,
	useLocation,
	Navigate,
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Intro from "./components/Wiki/Intro";
import Article from "./components/Wiki/Article";
import Editor from "./pages/Editor";
import Error404 from "./pages/Error404";
import Error403 from "./pages/Error403";
import SearchContext from "./store/search-context";
import { Search } from "./components/Search/Search";
import useAuth from "./hooks/use-auth";
import PageContext from "./store/page-context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import ResetPassword from "./pages/ResetPassword";

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
			{!currentPage.includes("console") && <Nav />}
			{isShown && <Search />}
			<Outlet />
		</>
	);
};

const App = () => {
	const { uid } = useAuth();
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const checkLoggedIn = useMemo(
		() => (uid ? true : !!sessionStorage.getItem("uid")),
		[uid]
	);

	useEffect(() => {
		if (checkLoggedIn) {
			setIsLoggedIn(true);
			return;
		}
		setIsLoggedIn(false);
	}, [checkLoggedIn]);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<DefaultPage />}>
				<Route index element={<Home />} />
				<Route path="wiki" element={<Wiki />}>
					<Route index element={<Intro />} />
					<Route path=":articleAddress" element={<Article />} />
				</Route>
				<Route
					path="console/*"
					element={
						isLoggedIn ? (
							<Editor />
						) : (
							<Navigate to="/zabroniony" replace={true} />
						)
					}
				/>
				<Route path="rejestracja" element={<Signup />} />
				<Route path="resetowanie-hasla" element={<ResetPassword />} />
				<Route path="logowanie" element={<Login />} />
				<Route path="wylogowanie" element={<Logout />} />
				<Route path="zabroniony" element={<Error403 />} />
				<Route path="*" element={<Error404 />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
