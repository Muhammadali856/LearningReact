// This is the WRONG way to share data to another component
// import ComponentC from "./ComponentC.jsx";

// function ComponentB(props) {
//   return (
//     <div className="box">
//       <h1>Component B</h1>
//       <ComponentC user={props.user}/>
//     </div>
//   );
// }
// export default ComponentB

// This is the CORRECT way to share data to another component using Context API
import ComponentC from "./ComponentC.jsx";

function ComponentB() {
  return (
    <div className="box">
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
}
export default ComponentB