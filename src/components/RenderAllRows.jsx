import React from "react";
import RowElement from "./RowElement";

export default function RenderAllRows({ rows }) {
  return (
    <div className="rows">
      {rows.map((item, index) => (
        <RowElement key={index} index={index} />
      ))}
    </div>
  );
}
