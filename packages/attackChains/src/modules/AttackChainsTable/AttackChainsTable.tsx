import React from 'react';
import {useAttackChains} from "store/store";
import { Table } from '../../components'

export function AttackChainsTable() {
    const { attackChains } = useAttackChains();

    // code logic, transfomation etc

    return (
        <div className="">
            <Table data={attackChains.data.models} />
        </div>
    )
}