import React from "react";

function TableContainer({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-lg shadow-slate-200/50">
      {children}
    </div>
  );
}

export default TableContainer;
