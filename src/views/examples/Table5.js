import React, { useState, useEffect } from 'react';
import { Table } from "reactstrap";

const Table5 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}Complaints/`);
    const table5Data = await response.json();
    setData(table5Data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.id}</td>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table5;
