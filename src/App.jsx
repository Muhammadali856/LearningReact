import UserGreeting from './UserGreeting';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="SoleLordAli" />
      <UserGreeting isLoggedIn={false} username="SoleLordAli" />
      <UserGreeting isLoggedIn={true} />

    </>
  );
}

export default App;
