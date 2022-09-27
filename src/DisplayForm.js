import React from "react";

function DisplayForm({ data }) {
  return (
    <div>
      <h3>Form </h3>
      <p> {JSON.stringify(data)} </p>
      <form>
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
                readOnly={true}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default DisplayForm;
