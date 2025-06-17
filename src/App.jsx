import List from './List.jsx';

function App() {

  const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "banana", calories: 105 },
        { id: 3, name: "cherry", calories: 50 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "grape", calories: 62 }
    ];

    const vegetables = [
        { id: 6, name: "carrot", calories: 25 },
        { id: 7, name: "broccoli", calories: 55 },
        { id: 8, name: "spinach", calories: 23 },
        { id: 9, name: "potato", calories: 163 },
        { id: 10, name: "tomato", calories: 22 }
    ];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null} {/* This list will not shown because list has arrived as a null list*/}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  );
}

export default App;
