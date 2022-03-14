import React from 'react';
import {useAttackChains} from "store/store";
import { Table } from '../../components'

export function AttackChainsTable() {
    const { attackChains } = useAttackChains();

    // code logic, transfomation etc

    return (
        <div className="container mx-auto bg-grey-500 py-8">
            <Table data={attackChains.data.models} />
        </div>
    )
}