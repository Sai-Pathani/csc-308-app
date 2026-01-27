// src/MyApp.jsx
import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import SectionHeader from "./components/SectionHeader";

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
          <SectionHeader
            eyebrow="Team Directory"
            title="Employees Table"
            subtitle="Add new hires or remove folks as your roster changes."
          />
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
