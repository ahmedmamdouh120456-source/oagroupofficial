import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { OAReachPage } from "./components/pages/OAReachPage";
import { WorksPage } from "./components/pages/WorksPage";
import { ContactPage } from "./components/pages/ContactPage";
import { GlobalPresencePage } from "./components/pages/GlobalPresencePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "oa-reach", Component: OAReachPage },
      { path: "works", Component: WorksPage },
      { path: "global-presence", Component: GlobalPresencePage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
