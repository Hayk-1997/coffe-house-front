import {RouteProperties} from "../interfaces/routes";
import Login from "../components/coffee/auth/Login";

const routes: RouteProperties[] = [
    {
        component: Login,
        exact: true,
        path: '/login',
    }
];

export default routes;