import { useState } from "react";
import AnalogInput from "./object_components/AnalogInput";

function ObjectCreationForm({ setPointsList }) {
    const [objectTypeSelected, setObjectTypeSelected] = useState({});
    const [objectName, setObjectName] = useState("");
    const [objectInstance, setObjectInstance] = useState("");
    const objectTypes = {
        ai: "Analog Input",
        ao: "Analog Output",
        av: "Analog Variable",
        bi: "Binary Input",
        bo: "Binary Output",
        bv: "Binary Variable",
        bde: "Bulk Data Exchange",
        evCOS: "Event Enrollment - Change of State",
        evCOV: "Event Enrollment - Change of Value",
        evCF: "Event Enrollment - Command Failure",
        evFL: "Event Enrollment - Floating Limit",
        evOOR: "Event Enrollment - Out of Range",
        mt: "Multi-Trend",
        mv: "Multi-Variable",
        pg: "Program",
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(objectTypeSelected, objectName, objectInstance);
                setPointsList({
                    objectTypeSelected,
                    objectName,
                    objectInstance,
                });
            }}
            className="flex flex-col m-3 p-10 w-1/4 rounded-lg bg-stone-200 items-center"
        >
            <div className="flex flex-col">
                <label htmlFor="object-type">Object Type:</label>
                <select
                    id="object-type"
                    onChange={(e) => {
                        console.log(Object.keys(objectTypes)[e.target.value]);
                        setObjectTypeSelected(
                            Object.keys(objectTypes)[e.target.value]
                        );
                    }}
                    defaultValue=""
                    className="p-1"
                >
                    <option value="" disabled>
                        Select Object Type
                    </option>
                    {Object.keys(objectTypes).map((objectType, index) => {
                        return (
                            <option key={index} value={index}>
                                {objectTypes[objectType]}
                            </option>
                        );
                    })}
                </select>
                {objectTypeSelected === "ai" ? (
                    <AnalogInput
                        objectName={objectName}
                        objectInstance={objectInstance}
                        setObjectName={setObjectName}
                        setObjectInstance={setObjectInstance}
                    />
                ) : null}
            </div>

            <button className="bg-stone-400 mt-10 rounded-lg w-1/2 h-10 text-white shadow-md shadow-black hover:bg-stone-500 hover:shadow-stone-700 hover:shadow-xl hover:font-bold active:ring active:ring-black active:bg-white active:text-black active:shadow-lg active:shadow-stone-500">
                Add to List
            </button>
        </form>
    );
}

export default ObjectCreationForm;
