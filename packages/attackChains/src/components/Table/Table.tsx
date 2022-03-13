import React from 'react';
import { IAttackPathModel } from 'shared-types';
import { map } from 'lodash';

export interface TableProps {
    data: IAttackPathModel[];
}

export function Table({ data }: TableProps) {
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Name</th>
                </tr>
            </thead>

            <tbody>
            {
                map(data, (x, idx) => (
                    <tr className={idx % 2 === 0 ? "bg-emerald-200" : ""} key={x.model.data.AttackPath.Id}>
                        <td>
                            {x.model.data.AttackPath.Title}
                        </td>
                        <td>
                            {x.model.data.AttackPath.Name}
                        </td>
                    </tr>
                ))
            }
            </tbody>

        </table>
    );
}