//import { MouseEvent, useState } from "react";
import { useState } from "react";
//using an interface u can define the shape/interface of an object
//props is the object here, and the two properties of it are items and heading (The 3rd property is the function)
interface Props {
  items: string[];
  heading: string;
  //Property     //parameter     //return void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <h1>{heading}</h1>
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
              onSelectItem(item);
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
