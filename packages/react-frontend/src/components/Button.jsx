import React from "react";

function Button({ onClick, text }) {
  return (
    <button
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:translate-y-px"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
