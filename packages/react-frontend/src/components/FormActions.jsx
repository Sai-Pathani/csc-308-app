import React from "react";

function FormActions({ onSubmit }) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs text-slate-500">
        Tip: keep roles short and consistent for easy scanning.
      </p>
      <button
        className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0"
        type="button"
        onClick={onSubmit}
      >
        Add employee
      </button>
    </div>
  );
}

export default FormActions;
