import {
    ADMIN_ROUTE,
    BLOG_ROUTE,
    BLOGS_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    NEWS_ROUTE,
    ONE_NEWS_ROUTE,
    CABINET_ROUTE,
    REGISTRATION_ROUTE,
    RECORD_DOCTOR_ROUTE,
    FAMILY_DOCTOR_ROUTE,
    OUTPATIENT_CARD_ROUTE,
    VISIT_HISTORY_ROUTE,
    MEDICAL_HISTORY_ROUTE, RECIPE_ROUTE, MANAGE_STAFF_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import OneBlogPage from "./pages/OneBlogPage";
import BlogsPage from "./pages/BlogsPage";
import NewsPage from "./pages/NewsPage";
import OneNewsPage from "./pages/OneNewsPage";
import Cabinet from "./pages/Cabinet";
import RecordDoctor from "./pages/RecordDoctor"
import FamilyDoctor from "./pages/FamilyDoctor";
import OutpatientCard from "./pages/OutpatientCard";
import VisitHistory from "./pages/VisitHistory";
import MedicalHistory from "./pages/MedicalHistory";
import RecipePage from "./pages/RecipePage";
import ManageStaff from "./pages/ManageStaff";

export const authRoutes = [

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
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CABINET_ROUTE,
        Component: Cabinet
    },
    {
        path: RECORD_DOCTOR_ROUTE,
        Component: RecordDoctor
    },
    {
        path: FAMILY_DOCTOR_ROUTE,
        Component: FamilyDoctor
    },
    {
        path: OUTPATIENT_CARD_ROUTE,
        Component: OutpatientCard
    },
    {
        path: VISIT_HISTORY_ROUTE,
        Component: VisitHistory
    },
    {
        path: MEDICAL_HISTORY_ROUTE,
        Component: MedicalHistory
    },
    {
        path: RECIPE_ROUTE,
        Component: RecipePage
    },
    {
        path: MANAGE_STAFF_ROUTE,
        Component: ManageStaff
    }
]