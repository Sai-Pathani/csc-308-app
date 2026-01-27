import React from "react";
import TableRow from "./TableRow";

function TableBody({ characterData, removeCharacter }) {
  return (
    <tbody className="divide-y divide-slate-100">
      {characterData.map((row, index) => (
        <TableRow
          key={index}
          row={row}
          index={index}
          onRemove={removeCharacter}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
