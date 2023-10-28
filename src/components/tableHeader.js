import React from "react";

const TableHeader = ({ count }) => {
  return (
    <thead>
      <tr>
        <th>Event Count: {count}</th>
        <th>Yorumlar</th>
        <th>&nbsp;</th>
        <th>1</th>
        <th>X</th>
        <th>2</th>
        <th>Alt</th>
        <th>Üst</th>
        <th>H1</th>
        <th>1</th>
        <th>X</th>
        <th>2</th>
        <th>H2</th>
        <th>1-X</th>
        <th>1-2</th>
        <th>X-2</th>
        <th>Var</th>
        <th>Yok</th>
        <th>+99</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
