import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { HOME_ROUTE, ABOUT_ROUTE, PORTFOLIO_ROUTE, WEDDINGS_ROUTE, LOVESTORIES_ROUTE, PORTRAITS_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, POLICY_ROUTE} from "./utils/consts";
import Weddings from "./pages/portfolio/Weddings";
import Lovestories from "./pages/portfolio/Lovestories";
import Portraits from "./pages/portfolio/Portraits";
import PortfolioPage from "./pages/portfolio/PortfolioPage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: WEDDINGS_ROUTE,
        Component: Weddings
    },
    {
        path: LOVESTORIES_ROUTE,
        Component: Lovestories
    },
    {
        path: PORTRAITS_ROUTE,
        Component: Portraits
    },
    {
        path: PORTFOLIO_ROUTE + '/:title',
        Component: PortfolioPage
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: FAQ_ROUTE,
        Component: FAQ
    },
    {
        path: POLICY_ROUTE,
        Component: PrivacyPolicy
    }
]