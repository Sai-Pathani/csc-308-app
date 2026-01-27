import React, { useState } from "react";
import LabeledField from "./LabeledField";
import FormActions from "./FormActions";

function Form({ handleSubmit }) {
  const [person, setPerson] = useState({
    name: "",
    job: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "job") setPerson({ name: person["name"], job: value });
    else setPerson({ name: value, job: person["job"] });
  }

  function submitForm() {
    handleSubmit(person);
    setPerson({ name: "", job: "" });
  }

  return (
    <form className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/50">
      <div className="grid gap-4 md:grid-cols-2">
        <LabeledField
          id="name"
          label="Name"
          placeholder="Add a name"
          value={person.name}
          onChange={handleChange}
        />
        <LabeledField
          id="job"
          label="Job"
          placeholder="Role or title"
          value={person.job}
          onChange={handleChange}
        />
      </div>
      <FormActions onSubmit={submitForm} />
    </form>
  );
}

export default Form;
