import { useEffect } from "react";

function PointsListTable({ pointsList }) {
    useEffect(() => {}, []);

    return (
        <div id="pl-table" className="p-2 w-1/2 overflow-y-scroll">
            <table>
                <thead>
                    <tr>
                        <th>Object Type</th>
                        <th>Object Name</th>
                        <th>Object Instance</th>
                    </tr>
                </thead>
                <tbody>
                    {pointsList.map((point) => {
                        return (
                            <tr key={point.objectInstance}>
                                <td>
                                    {point.objectTypeSelected.toUpperCase()}
                                </td>
                                <td>{point.objectName}</td>
                                <td>{point.objectInstance}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PointsListTable;
