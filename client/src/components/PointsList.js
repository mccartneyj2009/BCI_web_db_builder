function PointsList({ pointsList }) {
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
                            <tr>
                                <td>{point}</td>
                                <td>{point}</td>
                                <td>{point}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PointsList;
