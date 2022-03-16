import React, { useEffect } from "react";
import "./styles.css";
import { useAttackChains } from "store/store";
import { useNavigate } from "react-router-dom";
import { AttackChainsTable } from "./modules";
import { EventBus } from "store/store";
import { IdentityPayload } from "shared-types";

export default function AttackChains() {
    const { fetchAttackChains, attackChains } = useAttackChains();

    const navigate = useNavigate();

    useEffect(() => {
        const unregister = EventBus.getInstance().register(
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

    useEffect(() => {
        fetchAttackChains();
    }, []);

    if (attackChains.loading) {
        return <div>loading...</div>;
    }

    if (!attackChains.data?.models?.length) {
        return <div>no data</div>;
    }

    return (
        <div>
            <AttackChainsTable />
        </div>
    );
}
