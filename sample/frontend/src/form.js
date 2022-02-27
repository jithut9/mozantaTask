import React from "react";
import axios from "axios";
import "./App.css";

export default function Form() {
  function formData(e) {
    e.preventDefault();
    var data = {
      name: document.getElementById("name").value,
      clas: document.getElementById("class").value,
      dob: document.getElementById("dob").value,
      division: document.getElementById("division").value,
      genter: document.getElementById("genter").value,
    };
    axios.post("http://localhost:8000/add", data);
    window.location.reload(false)
  }

  return (
    <div  className="form">
      <form  >
        <table>
          <tr>
            <td>NAME :</td>
            <td>
              {" "}
              <input type="text" id="name" placeholder="Name"/>{" "}
            </td>
          </tr>
          <tr>
            <td>DATE OF BIRTH :</td>
            <td>
              {" "}
              <input type="date" id="dob" />{" "}
            </td>
          </tr>
          <tr>
            <td>Class :</td>
            <td>
              <select id="class">
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
                <option value="4">IV</option>
                <option value="5">V</option>
                <option value="6">VI</option>
                <option value="7">VII</option>
                <option value="8">VIII</option>
                <option value="9">IX</option>
                <option value="10">X</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Division :</td>
            <td>
              <select id="division">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Gender :</td>
            <input type="radio" id="genter" name="genter" value="male" />
            <label>male</label> <br />
            <input type="radio" id="genter" name="genter" value="female" />{" "}
            <label>female</label> <br />
          </tr>

          <tr>
              <td colSpan="2">

              </td>
          </tr>

          <tr>
              <td></td>
          <td>
              <input className="btn btn-block btn-success" onClick={formData} type="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
