//import { MouseEvent, useState } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["Matale", "Kandy", "Nuwara Eliya", "Trincomalee", "Jafna"];
  //let selectedIndex = 0;
  //Hook: a function that allows to tap into built-in features in react
  //from state hook u can tell that data/state in this component can change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; // var (selectedIndex)
  //arr[1]; // updater function

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            //onClick={//handleClick}
            //U don't call the function with (), just referencing. Calling will be done later at runtime
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
