import { RouteProperties } from '../../interfaces/routes';
import Login from '../../components/CoffeeHouse/auth/Login';
import Register from '../../components/CoffeeHouse/auth/Register';

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
