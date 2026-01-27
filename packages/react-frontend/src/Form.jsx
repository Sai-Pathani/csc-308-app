import React, { useState } from "react";

function Form(props) {
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
    props.handleSubmit(person);
    setPerson({ name: "", job: ""});
  }

  return (
    <form className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/50">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/30"
            type="text"
            name="name"
            id="name"
            placeholder="Add a name"
            value={person.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="job">
            Job
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/30"
            type="text"
            name="job"
            id="job"
            placeholder="Role or title"
            value={person.job}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          Tip: keep roles short and consistent for easy scanning.
        </p>
        <button
          className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0"
          type="button"
          onClick={submitForm}
        >
          Add employee
        </button>
      </div>
    </form>
  );
}
export default Form;
