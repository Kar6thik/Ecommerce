import { useState } from "react";
import Axios from "axios";
import "./Contact.css";

function Contact() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      file: file,
    }).then(() => {
      alert("file Uploaded Successfully");
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((res) => {
    setEmployeeList(res.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((val) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const ContactEmp={
    minHeight:"700px"
  }

  return (
    <div className="Contact" style={ContactEmp}>
      <div className="information">

        <label>First Name:</label>
        <input type="text" onChange={(event) => {setFirstName(event.target.value);}}/><br/>

        <label>Last Name:</label>
        <input type="text" onChange={(event) => {setLastName(event.target.value); }}/><br/>

        <label>Email:</label>
        <input type="email" onChange={(event) => {setEmail(event.target.value);}}/><br/>

        <label>File:</label>
        <input type="file" onChange={(event) => {setFile(event.target.value);}}/><br/>

        <button className="addemployee" onClick={addEmployee}>Add Employee</button><br/>

      </div>

      <div className="employees">

      <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val,key) => {
          return ([
            <div className="employee">
              <div>
                <h3>First Name: {val.firstname}</h3>
                <h3>Last Name: {val.lastname}</h3>
                <h3>Email: {val.email}</h3>
                <h3>File: {val.file}</h3>
              </div>

              <div>
                <button onClick={(id) => {deleteEmployee(val.id);}}> Delete </button>
              </div>
            </div>]
            
          );
        })}
      </div>
    </div>
  );
}

export default Contact;