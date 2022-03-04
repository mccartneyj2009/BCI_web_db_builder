function AnalogInput({
  objectName,
  objectInstance,
  setObjectName,
  setObjectInstance,
}) {
  return (
    <>
      <label htmlFor="object-name" className="mt-3">
        Object Name:
      </label>
      <input
        value={objectName}
        id="object-name"
        type="text"
        placeholder="ex. Outside Air Temperature"
        className="p-1"
        onChange={(e) => {
          console.log(e.target.value);
          setObjectName(e.target.value);
        }}
      />
      <label htmlFor="object-instance" className="mt-3">
        Object Instance:
      </label>
      <input
        value={objectInstance}
        id="object-instance"
        type="number"
        placeholder="ex. 1101"
        className="p-1"
        onChange={(e) => {
          console.log(e.target.value);
          setObjectInstance(e.target.value);
        }}
      />
    </>
  );
}

export default AnalogInput;
