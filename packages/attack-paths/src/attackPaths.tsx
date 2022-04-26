import React, { useCallback, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { AttackPathsTable } from "./modules";
import { EventBus } from "shared/shared";
import { IdentityPayload } from "shared-types";

export default function AttackPaths() {
    const navigate = useNavigate();

    useEffect(() => {
        const { unregister } = EventBus.getInstance().register(
            "identity",
            (identity: IdentityPayload) => {
                if (identity.status !== "success") {
                    navigate("/login");
                }
            }
        );

        return () => {
            unregister();
        };
    }, [navigate]);

    const handleLogout = useCallback(() => {
        EventBus.getInstance().dispatch("identity", {});
        navigate("/login");
    }, [navigate]);

    return (
        <div>
            <div className="container mx-auto flex justify-end">
                <div>
                    <button onClick={handleLogout}>logout</button>
                </div>
            </div>
            <AttackPathsTable />
        </div>
    );
}
