
function List ({ items = [], category = "Category" }){ // <-- Changes are here!


    const sortedItems = [...items].sort((a, b) => a.calories - b.calories);

    const listItems = sortedItems.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b> calories
                                          </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

export default List;