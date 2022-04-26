import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthorized } from "../../hooks";

export enum Roles {
    Admin = "admin",
}

export interface PrivateRouteProps {
    component: React.ComponentType;
    roles: Array<Roles>;
}

export function PrivateRoute({
    component: RouteComponent,
    roles,
}: PrivateRouteProps) {
    const { isAuthorized } = useAuthorized();

    const hasAccess = true; // roles.includes()

    if (isAuthorized && hasAccess) {
        return <RouteComponent />;
    }

    return <Navigate to="/login" />;
}
