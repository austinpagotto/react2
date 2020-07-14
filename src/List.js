import React from "react";

function List({data}){
    return(
        <ul>
        {data.map((permit) => (
          <li key={permit['Permit Number']}>
            {permit['Street Name']}
            <p>{permit.Value}</p>
          </li>
        ))}
      </ul>
    )

}

export default List;