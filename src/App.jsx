import Student from './Student.jsx'; 

function App() {
  return (
    <>
      <Student name="SpongeBob" age={13} isStudent={true} />
      <Student name="Patrick" age={17} isStudent={false} />
      <Student name="Squidward" age={23} isStudent={false} />
      <Student name="Sandy" age={20} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
