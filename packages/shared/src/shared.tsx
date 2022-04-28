import React from "react";

import { BrowserRouter } from "react-router-dom";
import { EventBus, IdentityProvider } from "./utils";
import {IdentityErrorPayload, IdentityPayload} from "./apis";

export function initEventBus(window: Window) {
    const { unregister } = EventBus.getInstance().register(
        "identity",
        (identity: IdentityPayload & IdentityErrorPayload) => {
            try {
                sessionStorage.setItem("identity", JSON.stringify(identity));
                localStorage.setItem("jwt", identity.jwt);
            } catch (e) {
                sessionStorage.clear();
                localStorage.clear();
            } finally {
                // todo something...
            }
        }
    );

    // TODO: declare global for this
    // @ts-ignore
    window.__APP__ = {
        EventBus: {
            getInstance: EventBus.getInstance(),
        },
    };
}

initEventBus(window);

try {
    const identity: IdentityPayload = sessionStorage.getItem("identity")
        ? JSON.parse(sessionStorage.getItem("identity")!)
        : {};

    EventBus.getInstance().dispatch<IdentityPayload>("identity", identity);
} catch (e) {
    console.error(e);
    sessionStorage.clear();
    localStorage.removeItem("jwt");
}

// TODO: export into somewhere
export function StoreProvider({ children }: { children: JSX.Element }) {
    return (
        <IdentityProvider>
            <BrowserRouter>{children}</BrowserRouter>
        </IdentityProvider>
    );
}

export { IdentityApi, http, Http } from "./apis";
export { EventBus, IdentityContext } from "./utils";
