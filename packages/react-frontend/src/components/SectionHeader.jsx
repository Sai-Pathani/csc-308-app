import React from "react";

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="text-sm text-slate-600">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
