// This is the CORRECT way to share data with another component using Context API
// I will not show the wrong way beacuse I am lazy
import React, {useContext} from 'react';
import { UserContext } from './ComponentA.jsx';


function ComponentD() {

  const User = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${User}`}</h2>
    </div>
  );
}
export default ComponentD;