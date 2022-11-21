import About from "./components/main/settings/About";
import Appereance from "./components/main/settings/Appereance";
import Manage from "./components/main/settings/Manage";
import Notification from "./components/main/settings/Notification";
import Restaurant from "./components/main/settings/Restaurant";
import Security from "./components/main/settings/Security";

export const settings = [
    {
        title: 'Appereance',
        info: 'Dark and Light mode, Font size',
        img: './setting-logos/appereance.svg',
        active: false,
        element: <Appereance />
    },
    {
        title: 'Your Restaurant',
        info: 'Dark and Light mode, Font size',
        img: './setting-logos/restaurant.svg',
        active: false,
        element: <Restaurant />
    },
    {
        title: 'Products Management',
        info: 'Manage your product, pricing, etc',
        img: './setting-logos/manage.svg',
        element: <Manage />,
        active: true
    },
    {
        title: 'Notifications',
        info: 'Customize your notifications',
        img: './setting-logos/notification.svg',
        active: false,
        element: <Notification />
    },
    {
        title: 'Security',
        info: 'Configure Password, PIN, etc',
        img: './setting-logos/security.svg',
        active: false,
        element: <Security />
    },
    {
        title: 'About Us',
        info: 'Find out more about Posly',
        img: './setting-logos/about.svg',
        active: false,
        element: <About />
    }
]