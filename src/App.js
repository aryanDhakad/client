import React, { useState } from "react";
import "./App.css";
import DisplayForm from "./DisplayForm";
import Form from "./Form";

function App() {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList((prev) => [...prev, item]);
  };
  const removeForm = (id) => {
    setList((prev) => prev.filter((item) => item.metadata.formId !== id));
  };
  return (
    <>
      <Form addToList={addToList} />

      {list.map((item, index) => (
        <div key={index}>
          <DisplayForm data={item} />
          <button onClick={() => removeForm(item.metadata.formId)}>
            Delete Form
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
