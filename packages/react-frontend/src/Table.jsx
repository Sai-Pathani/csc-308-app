// src/Table.jsx
import React from "react";

function Button(props) {
  return (
    <button
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:translate-y-px"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

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

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index} className="transition hover:bg-amber-50/60">
        <td className="px-4 py-3 text-sm font-medium text-slate-900">
          {row.name}
        </td>
        <td className="px-4 py-3 text-sm text-slate-600">{row.job}</td>
        <td className="px-4 py-3 text-sm">
          <Button
            text="Delete"
            onClick={() => props.removeCharacter(index)}
          />
        </td>
      </tr>
    );
  });
  return <tbody className="divide-y divide-slate-100">{rows}</tbody>;
}

function Table(props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-lg shadow-slate-200/50">
      <table className="w-full table-auto">
        <TableHeader />
        <TableBody
          characterData={props.characterData}
          removeCharacter={props.removeCharacter}
        />
      </table>
    </div>
  );
}

export default Table;
