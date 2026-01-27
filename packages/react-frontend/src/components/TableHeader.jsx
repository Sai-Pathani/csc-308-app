import React from "react";

function TableHeader() {
  return (
    <thead className="bg-slate-50">
      <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
        <th className="px-4 py-3">Name</th>
        <th className="px-4 py-3">Job</th>
        <th className="px-4 py-3">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
