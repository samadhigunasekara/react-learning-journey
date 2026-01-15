import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  let items = ["Matale", "Kandy", "Nuwara Eliya", "Trincomalee", "Jafna"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    //ListGroup Component
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>
        Hello <b>Samadhi</b>
      </Alert>
    </div>
  );
}

export default App;
