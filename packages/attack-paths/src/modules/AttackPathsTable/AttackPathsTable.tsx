import React, { useEffect, useState } from "react";
import { Table } from "../../components";
import { useNavigate } from "react-router-dom";
import { EventBus, http } from "@test/shared";

export interface IResponse {
    data: {
        models: Array<any>;
    };
    limit: number;
    status?: string;
    version?: string;
}

export function useAttackPaths() {
    const navigate = useNavigate();
    const [data, setData] = useState<IResponse>({
        data: {
            models: [],
        },
        limit: 0,
    });

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await http.get("sonar/query?", {
                    query: "AttackPaths",
                    standard_format: "true",
                });
                setData(response);
            } catch (e) {
                EventBus.getInstance().dispatch("identity", {});
                navigate("/login");
            }
        };

        fetch();
    }, [navigate]);

    return {
        data: data,
    };
}

export function AttackPathsTable() {
    const { data } = useAttackPaths();

    return (
        <div className="container mx-auto bg-grey-500 py-8">
            <Table data={data.data.models} />
        </div>
    );
}
