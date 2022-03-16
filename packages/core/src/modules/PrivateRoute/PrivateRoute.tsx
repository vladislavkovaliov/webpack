import React from "react";
import { Navigate } from "react-router-dom";
import { useReduxStore } from "store/store";

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
    const { identity } = useReduxStore("identity");
    const hasAccess = true; // roles.includes()

    if (identity.jwt && hasAccess) {
        return <RouteComponent />;
    }

    return <Navigate to="/login" />;
}
