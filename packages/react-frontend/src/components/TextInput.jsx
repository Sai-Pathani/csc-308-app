import React from "react";

function TextInput(props) {
  return (
    <input
      className="mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/30"
      {...props}
    />
  );
}

export default TextInput;
