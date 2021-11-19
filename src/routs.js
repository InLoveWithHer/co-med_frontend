import {
    ADMIN_ROUTE, BLOG_ROUTE, BLOGS_ROUTE, CREATE_BLOG_ROUTE, CREATE_NEWS_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, NEWS_ROUTE, ONE_NEWS_ROUTE, CABINET_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import OneBlogPage from "./pages/OneBlogPage";
import BlogsPage from "./pages/BlogsPage";
import CreateBlog from "./pages/CreateBlog";
import CreateNews from "./pages/CreateNews";
import NewsPage from "./pages/NewsPage";
import OneNewsPage from "./pages/OneNewsPage";
import Cabinet from "./pages/Cabinet";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CREATE_BLOG_ROUTE,
        Component: CreateBlog
    },
    {
        path: CREATE_NEWS_ROUTE,
        Component: CreateNews
    },
    {
        path: CABINET_ROUTE,
        Component: Cabinet
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BLOG_ROUTE + '/:id',
        Component: OneBlogPage
    },
    {
        path: BLOGS_ROUTE,
        Component: BlogsPage
    },
    {
        path: NEWS_ROUTE,
        Component: NewsPage
    },
    {
        path: ONE_NEWS_ROUTE + '/:id',
        Component: OneNewsPage
    }
]