import React, { useEffect, useState } from "react";

function Form({ addToList }) {
  const [field, setField] = useState({
    title: "",
    type: "",
    name: "",
    placeholder: "",
  });
  const [fields, setFields] = useState([]);
  const [data, setData] = useState({});

  const addField = () => {
    setFields((prev) => [...prev, field]);
  };

  useEffect(() => {
    let obj = {};
    fields.forEach((item) => {
      obj[item.name] = {
        ...item,
        [item.name]: "",
      };
    });
    setData(obj);
  }, [fields]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setField((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          name: value,
        },
      };
    });
  };

  const handleSubmit = () => {
    addToList(data);
    setData(field);
  };

  return (
    <div>
      <h3>Add Field</h3>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={field.title}
          onChange={(e) => handleFieldChange(e)}
        />
        <br />
        <label htmlFor="name">Name Attribute </label>
        <br />
        <input
          type="text"
          name="name"
          value={field.name}
          onChange={(e) => handleFieldChange(e)}
        />
        <br />
        <label htmlFor="type">Type</label>
        <br />
        <input
          type="text"
          name="type"
          value={field.type}
          onChange={(e) => handleFieldChange(e)}
        />
        <br />
        <label htmlFor="type">Placeholder</label>
        <br />
        <input
          type="text"
          name="placeholder"
          value={field.placeholder}
          onChange={(e) => handleFieldChange(e)}
        />
        <br />
        <button onClick={() => addField()}>Add Field</button>
      </div>
      <h3>This is a Form </h3>

      <form onSubmit={handleSubmit}>
        {Object.keys(data).map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={item}>{data[item].title}</label>
              <br />
              <input
                type={data[item].type}
                name={item}
                value={data[item].name}
                placeholder={data[item].placeholder}
                onChange={(e) => handleChange(e)}
              />
            </div>
          );
        })}
      </form>
      {/* <h3>
        {" "}
        Name : {data.name} , Age : {data.age}{" "}
      </h3> */}
      <button onClick={() => handleSubmit()}>Submit </button>
    </div>
  );
}

export default Form;
