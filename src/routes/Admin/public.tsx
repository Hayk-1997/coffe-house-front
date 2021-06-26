import {RouteProperties} from "../../interfaces/routes";
import Login from "../../components/coffee/auth/Login";
import Register from "../../components/coffee/auth/Register";

const routes: RouteProperties[] = [
    {
        component: Login,
        exact: true,
        path: '/admin/login',
    },
    {
        component: Register,
        exact: true,
        path: '/admin/register',
    }
];

export default routes;