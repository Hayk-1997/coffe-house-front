import React from 'react';
import LayoutPageProperties from "../template/LayoutPageProperties";
import { RouteTypeEnum } from "./typeEnums";

export interface RouteProperties {
    component: React.FC;
    exact?: boolean;
    params?: {
        [key: string]: any;
    };
    path: string;
    template?: React.FC<LayoutPageProperties>;
}

export interface RouteTemplateProperties {
    id: Number;
    routes: RouteProperties[];
    template: React.FC<LayoutPageProperties>;
    type: RouteTypeEnum;
}