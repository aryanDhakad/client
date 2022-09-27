import React, { useState } from "react";
import "./App.css";
import DisplayForm from "./DisplayForm";
import Form from "./Form";

function App() {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList((prev) => [...prev, item]);
  };
  return (
    <>
      <Form addToList={addToList} />

      {list.map((item, index) => (
        <div key={index}>
          <DisplayForm data={item} />
        </div>
      ))}
    </>
  );
}

export default App;
