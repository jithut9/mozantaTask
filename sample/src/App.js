import "./App.css";
import { useState } from "react";

function App() {
    const [studentData, setStudentData] = useState({
        name: "",
        dob: "",
        classes: "",
        division: "",
        gender: "",
    });

    const formValidation = e => {
        e.preventDefault();
        console.log(studentData);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Student Info</h1>
            </header>
            <form onSubmit={formValidation}>
                <div className="input-container">
                    <label>Name</label>
                    <input
                        type="text"
                        value={studentData.name}
                        onChange={e =>
                            setStudentData({
                                ...studentData,
                                name: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="input-container">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        value={studentData.dob}
                        onChange={e =>
                            setStudentData({
                                ...studentData,
                                dob: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="input-container">
                    <label>Class</label>
                    <select
                        value={studentData.classes}
                        onChange={e => {
                            setStudentData({
                                ...studentData,
                                classes: e.target.value,
                            });
                        }}
                    >
                        <option value="">Select Class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Division</label>
                    <select
                        value={studentData.division}
                        onChange={e => {
                            setStudentData({
                                ...studentData,
                                division: e.target.value,
                            });
                        }}
                    >
                        <option value="">Select Division</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Gender</label>
                    <div>
                        <input
                            type="radio"
                            value="male"
                            name="gender"
                            onClick={() => {
                                setStudentData({
                                    ...studentData,
                                    gender: "male",
                                });
                            }}
                            checked={"male" === studentData.gender}
                        />
                        <label>Male</label>
                        <input
                            type="radio"
                            value="female"
                            name="gender"
                            onClick={() => {
                                setStudentData({
                                    ...studentData,
                                    gender: "female",
                                });
                            }}
                            checked={"female" === studentData.gender}
                        />
                        <label>Female</label>
                    </div>
                </div>
                <div className="form-button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
