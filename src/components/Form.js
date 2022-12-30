import { useState } from "react";
import { Input } from "./Input";

export function Form() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    password: "",
  });

  const handleInputChage = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(`State form submitted: ${JSON.stringify(form)}`);
  };
  console.log('rend...')
  return (
    <div className="exercise__container mt-4">
      <section>
        <h4 className="counter__title mb-3">Exercise 2 - Form</h4>
        <form onSubmit={handleOnSubmit} className="row">
          <div className="col-12">
            <Input
              value={form.name}
              type={"text"}
              label={"Name"}
              name={"name"}
              onChange={handleInputChage}
            ></Input>
          </div>
          <div className="col-12">
            <Input
              value={form.surname}
              type={"text"}
              label={"Surname"}
              name={"surname"}
              onChange={handleInputChage}
            ></Input>
          </div>
          <div className="col-12">
            <Input
              value={form.password}
              type={"password"}
              label={"Password"}
              name={"password"}
              onChange={handleInputChage}
            ></Input>
          </div>
          <div className="col-12 mt-2 mb-4 w-100">
            <Input type={"submit"} value={"Submit"}></Input>
          </div>
        </form>
      </section>
    </div>
  );
}
