import React from "react";
import Button from "./Button";

function TableRow({ row, index, onRemove }) {
  return (
    <tr className="transition hover:bg-amber-50/60">
      <td className="px-4 py-3 text-sm font-medium text-slate-900">
        {row.name}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">{row.job}</td>
      <td className="px-4 py-3 text-sm">
        <Button text="Delete" onClick={() => onRemove(index)} />
      </td>
    </tr>
  );
}

export default TableRow;
