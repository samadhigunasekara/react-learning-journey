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
  // Concept: Hook
  // A function that lets us 'hook' into React features.
  // selectedIndex = current data (arr[0])
  // setSelectedIndex = function to update data (arr[1])
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
