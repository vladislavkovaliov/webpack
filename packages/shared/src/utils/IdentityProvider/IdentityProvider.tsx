import React, { createContext, useMemo, useState } from "react";
import { IdentityPayload } from "shared-types";
import { EventBus } from "../EventBus/EventBus";

export const defaultIdentity = {
    jwt: "",
    refresh: "",
    email: "",
    status: "",
};

export interface IdentityContextProps {
    identity: typeof defaultIdentity;
    updateIdentity?: (x: IdentityPayload) => void;
}

export const IdentityContext = createContext<IdentityContextProps>({
    identity: { ...defaultIdentity },
});

export function IdentityProvider({ children }: { children: React.ReactNode }) {
    const [identity, setIdentity] = useState<IdentityPayload>(() => {
        try {
            const identity: IdentityPayload = sessionStorage.getItem("identity")
                ? JSON.parse(sessionStorage.getItem("identity")!)
                : {
                      ...defaultIdentity,
                  };
            EventBus.getInstance().dispatch<IdentityPayload>(
                "identity",
                identity
            );

            return {
                ...identity,
            };
        } catch (e) {
            console.error(e);
            sessionStorage.clear();
            localStorage.removeItem("jwt");

            return {
                ...defaultIdentity,
            };
        }
    });

    const context = useMemo(
        (): IdentityContextProps => ({
            identity: { ...identity },
        }),
        []
    );

    return (
        <IdentityContext.Provider value={context}>
            {children}
        </IdentityContext.Provider>
    );
}
