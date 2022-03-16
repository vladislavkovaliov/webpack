import React from "react";
import { IAttackPathModel } from "shared-types";
import { map } from "lodash";

export interface TableProps {
    data: IAttackPathModel[];
}

export function Table({ data }: TableProps) {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th />
                    <th className="text-left pl-8 font-light text-gray-600 text-sm">
                        Id
                    </th>
                    <th className="text-left pl-8 font-light text-gray-600 text-sm">
                        Title
                    </th>
                    <th className="text-left pl-8 font-light text-gray-600 text-sm">
                        Name
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {map(data, (x, idx) => (
                    <>
                        <tr
                            key={x.model.data.AttackPath.Id}
                            className="bg-white relative font-light shadow-md rounded-l"
                        >
                            <td className="text-left pl-8 py-8 rounded-l">
                                <div className="w-1 rounded-l border-red-600 absolute top-0 left-0 bottom-0 bg-red-600 h-full" />
                            </td>
                            <td className="text-left pl-8 font-bold">
                                {x.model.data.AttackPath.Title}
                            </td>
                            <td className="text-left pl-8">
                                {x.model.data.AttackPath.Title}
                            </td>
                            <td className="text-left pl-8 rounded-l">
                                <a
                                    href="/"
                                    className="text-blue-600 hover:underline"
                                >
                                    Investigate
                                </a>
                            </td>
                        </tr>
                        <tr
                            key={x.model.data.AttackPath.Id + idx}
                            className="h-2"
                        />
                    </>
                ))}
            </tbody>
        </table>
    );
}
