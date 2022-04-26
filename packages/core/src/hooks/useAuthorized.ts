import { useState } from "react";

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
