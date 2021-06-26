import React from 'react';
import PageProperties from "./PageProperties";
import LayoutPageProperties from "../template/LayoutPageProperties";
import { RouteTypeEnum } from "./typeEnums";

export interface RouteProperties {
    component: React.FC<PageProperties>;
    exact?: boolean;
    params?: {
        [key: string]: any;
    };
    path: string;
    template?: React.FC<LayoutPageProperties>;
}

export interface RouteTemplateProperties {
    routes: RouteProperties[];
    template: any;//React.FC<LayoutPageProperties>;
    type: RouteTypeEnum;
}