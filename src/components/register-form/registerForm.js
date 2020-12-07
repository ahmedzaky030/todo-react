import React, { useState } from "react";
import citiesArr from "../../cities.json";
import "./register.css";
function RegisterForm({ closeModal }) {
  const [employee, updateEmp] = useState({
    email: "",
    name: "",
    age: "",
    country: "",
    city: "",
    isSingle: false,
  });

  const [cities, updateCities] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employee);
  };

  function handleCountryChange(e) {
    const { value } = e.target;
    updateEmp({ ...employee, country: value });
    const relatedCities = citiesArr.filter((v) => v.countryCode === value);
    updateCities(relatedCities);
  }

  return (
    <form className=" modall" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          defaultValue={employee.name}
          onChange={(e) => updateEmp({ ...employee, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          defaultValue={employee.email}
          onChange={(e) => updateEmp({ ...employee, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Age</label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          defaultValue={employee.age}
          onChange={(e) => updateEmp({ ...employee, age: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Country</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={handleCountryChange}
          defaultValue={employee.country}
        >
          <option value="egy">Egypt</option>
          <option value="mor">Morocco</option>
          <option value="tun">Tunisia</option>
          <option value="lib">Libya</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">City</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e) => updateEmp({ ...employee, city: e.target.value })}
          defaultValue={employee.city}
        >
          {cities ? (
            cities.map((v, i) => (
              <option key={i + 1} value={v.code}>
                {v.name}
              </option>
            ))
          ) : (
            <option>No Valid Option</option>
          )}
        </select>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={employee.isSingle}
          onChange={(e) =>
            updateEmp({ ...employee, isSingle: e.target.value === "on" })
          }
        />
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-check-label"
        >
          Is Single
        </label>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button onClick={closeModal} className="btn btn-primary ">
          Close
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
