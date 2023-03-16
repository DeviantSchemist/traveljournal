import './App.css';
import data from "./data";
import Card from "./Card";
import NavBar from "./NavBar";

function App() {
  const cards = data.map(item => <Card {...item} />);

  return (
    <div className="App flex flex-col h-screen justify-between">
      <NavBar />
      {cards}
    </div>
  )
}

export default App
