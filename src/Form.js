import React, { useEffect, useState } from "react";

function Form({ addToList, updateForm }) {
  const [field, setField] = useState({
    title: "",
    type: "",
    name: "",
    placeholder: "",
  });

  const [formId, setFormId] = useState(0);

  const [selected, setSelected] = useState({});
  const [fields, setFields] = useState([]);
  const [data, setData] = useState({
    metadata: {},
    data: {},
  });

  const addField = () => {
    setFields((prev) => [...prev, field]);
  };

  useEffect(() => {
    let obj = {};
    fields.forEach((item) => {
      obj[item.name] = {
        ...item,
        name: "",
      };
    });
    setData((prev) => {
      return {
        ...prev,
        data: obj,
      };
    });
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
        // ...prev,
        // [name]: {
        //   ...prev[name],
        //   name: value,
        // },

        ...prev,
        data: {
          ...prev.data,
          [name]: {
            ...prev.data[name],
            name: value,
          },
        },
      };
    });
  };

  const handleSubmit = () => {
    addToList(data);
    // setData(field);
  };

  const deleteField = (delItemName) => {
    setFields((prev) => prev.filter((item) => item.name !== delItemName));
  };

  const selectField = (updateItemName) => {
    setSelected({ ...data[updateItemName], name: updateItemName });
  };

  const updateField = () => {
    setFields((prev) =>
      prev.map((item) => {
        if (item.name === selected.name) return field;
        else return item;
      })
    );
  };

  useEffect(() => {
    setField(selected);
  }, [selected]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const updateId = (e) => {
    const { name, value } = e.target;

    setFormId(value);
    setData((prev) => {
      return {
        ...prev,
        metadata: {
          ...prev.metadata,
          [name]: value,
        },
      };
    });
  };

  return (
    <div>
      <h3>Add Field</h3>
      <h4>
        {" "}
        Form ID :{" "}
        <input
          type="text"
          name="formId"
          value={formId}
          onChange={(e) => updateId(e)}
        />
      </h4>

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
        <button onClick={() => updateField()}>Update Field</button>
      </div>
      <h3>This is a Form </h3>

      <div>
        {Object.keys(data.data).map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={item}>{data.data[item].title}</label>
              <br />
              <input
                type={data.data[item].type}
                name={item}
                value={data.data[item].name}
                placeholder={data.data[item].placeholder}
                onChange={(e) => handleChange(e)}
              />
              <button onClick={() => deleteField(item)}>Delete</button>
              <button onClick={() => selectField(item)}>Update</button>
            </div>
          );
        })}
      </div>
      {/* <h3>
        {" "}
        Name : {data.name} , Age : {data.age}{" "}
      </h3> */}
      <button onClick={() => handleSubmit()}>Submit </button>
    </div>
  );
}

export default Form;
