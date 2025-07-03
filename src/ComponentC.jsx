// This is Wrong way to share data with another component
// import ComponentD from "./ComponentD.jsx";

// function ComponentC(props) {
//   return (
//     <div className="box">
//       <h1>Component C</h1>
//       <ComponentD user={props.user}/>
//     </div>
//   );
// }
// export default ComponentC;

//This is the CORRECT way to share data with another component using Context API
import ComponentD from "./ComponentD.jsx";

function ComponentC() {
  return (
    <div className="box">
      <h1>Component C</h1>
      <ComponentD />
    </div>
  );
}
export default ComponentC;
