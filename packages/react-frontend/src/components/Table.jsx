import React from "react";
import TableContainer from "./TableContainer";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  return (
    <TableContainer>
      <table className="w-full table-auto">
        <TableHeader />
        <TableBody
          characterData={props.characterData}
          removeCharacter={props.removeCharacter}
        />
      </table>
    </TableContainer>
  );
}

export default Table;
