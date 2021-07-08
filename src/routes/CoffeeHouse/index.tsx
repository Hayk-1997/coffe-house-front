import { RouteProperties } from '../../interfaces/routes';
import Login from '../../components/CoffeeHouse/auth/login';
import Register from '../../components/CoffeeHouse/auth/register';

const publicRoutes: RouteProperties[] = [
  {
    component: Login,
    exact: true,
    path: '/login'
  },
  {
    component: Register,
    exact: true,
    path: '/register'
  }
];

export default publicRoutes;
