import publicRoutes from "./public";
import AuthLayout from "../layouts/Admin/Auth/AuthLayout";
import { RouteTypeEnum } from "../interfaces/routes/typeEnums";
import {RouteTemplateProperties} from "../interfaces/routes";

export const routesTemplate: RouteTemplateProperties[] = [
    {
        routes: publicRoutes,
        template: AuthLayout,
        type: RouteTypeEnum.public,
    }
];