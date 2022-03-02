function ObjectCreationForm() {
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
    <form className="flex flex-col p-10 w-1/2 bg-stone-200">
      <label htmlFor="object-type">Object Type:</label>
      <select
        id="object-type"
        onChange={(e) => {
          console.log(Object.keys(objectTypes)[e.target.value]);
        }}
        defaultValue=""
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
      <label htmlFor="object-name">Object Name:</label>
      <input id="object-name" type="text" />
    </form>
  );
}

export default ObjectCreationForm;
