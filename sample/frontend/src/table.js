import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

export default function Table() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const req = axios.get("http://localhost:8000/list").then((data) => {
  
      setStudent(data.data);
    });
  }, []);

  const detele =(id)=>{
    axios.get("http://localhost:8000/del/"+id).then(data=>{
        setStudent(data.data);
    })
  }

  console.log(student);
  return (
    <div>
      <table className="table" class="table">
        <thead className="table">
          <tr className="table">
            <th className="table" scope="col">Name</th>
            <th className="table" scope="col">Class</th>
            <th className="table" scope="col">Division</th>
            <th className="table" >Gender</th>
            <th className="table">Remove</th>
          </tr>
        </thead>
        <tbody>
          {student.map((data) => {
            return (
              <tr key = {data.id}>
                <th className="table" scope="row">{data.name}</th>
                <td className="table">{data.clas}</td>
                <td className="table">{data.division}</td>
                <td className="table">{data.genter}</td>
                <td className="table">
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>detele(data.id)}>
                    <img className="img" src="https://icon2.cleanpng.com/20180314/ahe/kisspng-button-delete-key-icon-warning-icons-5aa8e9e09b7cc3.2774194015210193606369.jpg" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
