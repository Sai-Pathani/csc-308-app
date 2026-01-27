import React from "react";
import TextInput from "./TextInput";

function LabeledField({ id, label, placeholder, value, onChange }) {
  return (
    <div>
      <label
        className="text-xs font-semibold uppercase tracking-wider text-slate-500"
        htmlFor={id}
      >
        {label}
      </label>
      <TextInput
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LabeledField;
