import {
    HOME,
    CREATE,
    READ,
    UPDATE,
    DELETE,
    SWITCH,
} from "./consts";
import Home from "../pages/HomePage";
import Create from "../pages/CreatePage";
import Read from "../pages/ReadPage";
import Update from "../pages/UpdatePage";
import Delete from "../pages/DeletePage";
import Switch from "../pages/SettingsPage";
import ErrorPage from "../pages/ErrorPage";

export const routes=[
    {
        path: HOME,
        element: Home,
    },
    {
        path:CREATE,
        element: Create,
    },
    {
        path:UPDATE,
        element: Update,
    },
    {
        path: READ,
        element:Read,
    },
    {
        path:DELETE,
        element: Delete,
    },
    {
        path: SWITCH,
        element: Switch,
    },
    {
        path: "*",
        element: ErrorPage,
    }
]