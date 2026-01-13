import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Matale", "Kandy", "Nuwara Eliya", "Trincomalee", "Jafna"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
