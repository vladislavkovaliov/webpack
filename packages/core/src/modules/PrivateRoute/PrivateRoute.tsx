import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export enum Roles {
    Admin = "admin",
}

export interface PrivateRouteProps {
    component: React.ComponentType;
    roles: Array<Roles>;
}

export function useAuthorized() {
    const [isAuthorized, _] = useState(() => {
        try {
            const identity = JSON.parse(
                sessionStorage.getItem("identity") as string
            );

            return Boolean(identity.jwt);
        } catch (e) {
            return false;
        }
    });

    return {
        isAuthorized,
    };
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
