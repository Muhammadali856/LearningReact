
function List (){
    
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "banana", calories: 105 },
        { id: 3, name: "cherry", calories: 50 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "grape", calories: 62 }
    ];

    fruits.sort((a, b) => b.calories - a.calories);
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // How to filter fruits with less than 100 calories
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // How to filter fruits with 100 or more calories

    const itemList = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}:&nbsp;
                                                <b>{fruit.calories}</b> calories
                                          </li>);

    return(
        <div className="List">
            <ol>{itemList}</ol>
        </div>
    )
}

export default List;