import React from "react";
import Form from "./form";
import Table from "./table";


function App() {
  return (
    
    <div className="cont">
      <h2 className="h">SCHOOL REGISTER</h2>
      <div className="row">
        <div className="col-6">
          <h2>Student Register</h2>
          <br />
          <br />
          <Form />
        </div>
        <div className="col-6">
        <h2>Student Details</h2>
          <br />
          <br />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
