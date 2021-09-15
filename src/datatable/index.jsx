import React from 'react';

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  let i=0;


  return (

    <>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {data[0] && columns.map((heading) => <th key={i++}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(row => <tr key={row.id++}>
            {
              columns.map(column => {
                if (typeof (row[column]) === 'object') {

                  return <td key={row.id++}>{row[column].name}</td>
                } else {
                  return <td key={row.id++}>{row[column]}</td>
                }
              })
            }
          </tr>)}
        </tbody>
      </table>
    </>
  );
}
