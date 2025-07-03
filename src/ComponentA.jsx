// This is the old or wrong way to share data to another component

// import React, { useState} from 'react';
// import ComponentB from './ComponentB.jsx';

// function ComponentA() {

//     const [user, setUser] = useState("Eshboyev");

//     return (
//         <div className="box">
//         <h1>Component A</h1>
//         <h2>{`Hello ${user}`}</h2>
//             <ComponentB user={user}/>
//         </div>
//     );
// }
// export default ComponentA;

// This is the correct way to share data to another component using Context API
import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Eshboyev");

    return (
        <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB user={user}/>
        </UserContext.Provider>
        </div>
    );
}
export default ComponentA;