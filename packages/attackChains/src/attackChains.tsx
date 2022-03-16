import React, { useEffect } from "react";
import "./styles.css";
import { useReduxStore, useAttackChains } from "store/store";
import { useNavigate } from "react-router-dom";
import { AttackChainsTable } from "./modules";

export default function AttackChains() {
    const { identity } = useReduxStore("identity");
    const { fetchAttackChains, attackChains } = useAttackChains();

    const navigate = useNavigate();

    useEffect(() => {
        identity.status !== "success" && navigate("/login");
    }, [navigate, identity.status]);

    useEffect(() => {
        fetchAttackChains();
    }, [fetchAttackChains]);

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
