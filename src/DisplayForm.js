import React from "react";

function DisplayForm({ data }) {
  return (
    <div>
      <h3>Form </h3>
      <p> {JSON.stringify(data)} </p>
      <form>
        {Object.keys(data.data).map((item, index) => {
          return (
            <div key={index}>
              <h3>
                {data.data[item].title} : {data.data[item].name}
              </h3>
              <br />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default DisplayForm;
