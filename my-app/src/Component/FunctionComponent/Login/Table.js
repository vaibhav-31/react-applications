import React from 'react'

function Table(props) {
  return (
    <table>
      <thead> 
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
        </thead> 
            {props.func.map((v, i) => {
        return <tr>
          <th>{v[0]}</th>
          <th>{v[1]}</th>
        </tr>
      })}
    </table>
  );
}

export default Table;