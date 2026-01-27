// src/MyApp.jsx
import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ]);

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-rose-100 px-4 py-10 font-['Space_Grotesk']">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Team Directory
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Employees Table
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Add new hires or remove folks as your roster changes.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <Table
              characterData={characters}
              removeCharacter={removeOneCharacter}
            />
            <Form handleSubmit={updateList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
